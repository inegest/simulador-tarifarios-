import { useState, useMemo } from 'react';
import './App.css';
import { TARIFARIOS, TARIFARIO_GRUPOS, POTENCIAS, getComissaoByConsumo } from './data/tarifarios';

interface SimulationResult {
  tarifarioKey: string;
  nome: string;
  custoMensal: number;
  custoAnual: number;
  comissao: number;
  economia: number;
  economiaAnual: number;
  precoPotencia: number;
  precoEnergia: number | null;
}

function App() {
  const [potenciaContratada, setPotenciaContratada] = useState<string>('3.45');
  const [tipoConsumo, setTipoConsumo] = useState<'simples' | 'bi_horario' | 'tri_horario'>('simples');
  const [consumoSimples, setConsumoSimples] = useState<number>(300);
  const [consumoBiHorarioFora, setConsumoBiHorarioFora] = useState<number>(200);
  const [consumoBiHorarioVazio, setConsumoBiHorarioVazio] = useState<number>(100);
  const [consumoTriHorarioPonta, setConsumoTriHorarioPonta] = useState<number>(50);
  const [consumoTriHorarioCheias, setConsumoTriHorarioCheias] = useState<number>(150);
  const [consumoTriHorarioVazio, setConsumoTriHorarioVazio] = useState<number>(100);
  const [valorAtualMensal, setValorAtualMensal] = useState<number>(60);
  const [numeroDias, setNumeroDias] = useState<number>(30);
  const [selectedTarifarios, setSelectedTarifarios] = useState<Set<string>>(
    new Set(Object.keys(TARIFARIOS))
  );

  const getConsumoTotal = (): number => {
    switch (tipoConsumo) {
      case 'simples':
        return consumoSimples;
      case 'bi_horario':
        return consumoBiHorarioFora + consumoBiHorarioVazio;
      case 'tri_horario':
        return consumoTriHorarioPonta + consumoTriHorarioCheias + consumoTriHorarioVazio;
      default:
        return 0;
    }
  };

  const calcularCustoMensal = (potenciaData: any, tipoConsumo: 'simples' | 'bi_horario' | 'tri_horario'): number => {
    const custoPotencia = potenciaData.potencia * numeroDias;
    let custoEnergia = 0;

    if (typeof potenciaData.energia === 'number') {
      // Tarifa simples
      const consumoTotal = getConsumoTotal();
      custoEnergia = potenciaData.energia * consumoTotal;
    } else if (typeof potenciaData.energia === 'object') {
      // Tarifas com múltiplos períodos
      const energia = potenciaData.energia as any;

      if (tipoConsumo === 'bi_horario' && energia.fora_vazio !== undefined && energia.vazio !== undefined) {
        custoEnergia = (energia.fora_vazio * consumoBiHorarioFora) + (energia.vazio * consumoBiHorarioVazio);
      } else if (tipoConsumo === 'tri_horario' && energia.ponta !== undefined && energia.cheias !== undefined && energia.vazio !== undefined) {
        custoEnergia = (energia.ponta * consumoTriHorarioPonta) + (energia.cheias * consumoTriHorarioCheias) + (energia.vazio * consumoTriHorarioVazio);
      } else {
        // Fallback: usar média
        const valores = Object.values(energia) as number[];
        const mediaEnergia = valores.reduce((a: number, b: number) => a + b, 0) / valores.length;
        const consumoTotal = getConsumoTotal();
        custoEnergia = mediaEnergia * consumoTotal;
      }
    }

    return custoPotencia + custoEnergia;
  };

  const resultados = useMemo(() => {
    const results: SimulationResult[] = [];

    selectedTarifarios.forEach((tarifarioKey) => {
      const tarifa = TARIFARIOS[tarifarioKey as keyof typeof TARIFARIOS];
      if (!tarifa) return;

      const potenciaStr = potenciaContratada;
      const potenciaData = (tarifa.potencias as any)[potenciaStr];

      if (!potenciaData) return;

      // Filtrar EGREEN
      if (tarifarioKey.includes('btn_egreen')) return;

      // Filtrar por tipo de tarifa - DEVE CORRESPONDER EXATAMENTE
      if (tarifa.tipo !== tipoConsumo) return;

      const custoMensal = calcularCustoMensal(potenciaData, tipoConsumo);
      const custoAnual = custoMensal * 12;
      const economia = valorAtualMensal - custoMensal;
      const economiaAnual = economia * 12;

      // Obter comissão
      let comissao = 0;
      if ((tarifa as any).comissaoConsumoBased) {
        comissao = getComissaoByConsumo(tarifarioKey, getConsumoTotal());
      } else {
        comissao = (potenciaData as any).comissao || 0;
      }

      // Calcular preço de potência (€/dia)
      const precoPotencia = potenciaData.potencia;

      // Calcular preço de energia (€/kWh)
      let precoEnergia: number | null = null;
      if (typeof potenciaData.energia === 'number') {
        precoEnergia = potenciaData.energia;
      } else if (typeof potenciaData.energia === 'object') {
        // Para tarifas com múltiplos períodos, calcular média
        const valores = Object.values(potenciaData.energia) as number[];
        precoEnergia = valores.reduce((a: number, b: number) => a + b, 0) / valores.length;
      }

      results.push({
        tarifarioKey,
        nome: (tarifa as any).nome,
        custoMensal,
        custoAnual,
        comissao,
        economia,
        economiaAnual,
        precoPotencia,
        precoEnergia,
      });
    });

    // Ordenar por: 1) Maior economia, 2) Maior comissão
    return results.sort((a, b) => {
      if (b.economia !== a.economia) {
        return b.economia - a.economia; // Maior economia primeiro
      }
      return b.comissao - a.comissao; // Depois maior comissão
    });
  }, [potenciaContratada, tipoConsumo, consumoSimples, consumoBiHorarioFora, consumoBiHorarioVazio, consumoTriHorarioPonta, consumoTriHorarioCheias, consumoTriHorarioVazio, valorAtualMensal, numeroDias, selectedTarifarios]);

  const toggleTarifario = (key: string) => {
    const newSelected = new Set(selectedTarifarios);
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    setSelectedTarifarios(newSelected);
  };

  const selectAll = () => {
    setSelectedTarifarios(new Set(Object.keys(TARIFARIOS)));
  };

  const deselectAll = () => {
    setSelectedTarifarios(new Set());
  };

  const toggleGrupo = (grupo: string) => {
    const keys = TARIFARIO_GRUPOS[grupo as keyof typeof TARIFARIO_GRUPOS] || [];
    const newSelected = new Set(selectedTarifarios);
    const allSelected = keys.every(k => newSelected.has(k));

    if (allSelected) {
      keys.forEach(k => newSelected.delete(k));
    } else {
      keys.forEach(k => newSelected.add(k));
    }
    setSelectedTarifarios(newSelected);
  };

  const melhorOpcao = resultados[0];
  const segundaOpcao = resultados[1];
  const diferenca = segundaOpcao ? segundaOpcao.custoMensal - melhorOpcao.custoMensal : 0;
  const consumoTotal = getConsumoTotal();
  const tarifarioComMaiorEconomia = resultados.reduce((prev, current) => 
    (prev.economia > current.economia) ? prev : current
  );

  return (
    <div className="container">
      <header className="header">
        <h1>⚡ Simulador de Tarifários de Energia</h1>
        <p>Comparação de tarifários e comissões</p>
      </header>

      <div className="content">
        {/* Painel de Controlo */}
        <div className="panel">
          <h2>Parâmetros da Simulação</h2>

          <div className="control-group">
            <label>Potência Contratada (kVA):</label>
            <select
              id="potencia"
              value={potenciaContratada}
              onChange={(e) => setPotenciaContratada(e.target.value)}
            >
              {POTENCIAS.map((p) => (
                <option key={p} value={p.toString()}>
                  {p} kVA
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Tipo de Consumo:</label>
            <select
              id="tipoConsumo"
              value={tipoConsumo}
              onChange={(e) => setTipoConsumo(e.target.value as 'simples' | 'bi_horario' | 'tri_horario')}
            >
              <option value="simples">Simples</option>
              <option value="bi_horario">Bi-Horário</option>
              <option value="tri_horario">Tri-Horário</option>
            </select>
          </div>

          {tipoConsumo === 'simples' && (
            <div className="control-group">
              <label>Consumo Mensal (kWh):</label>
              <input
                id="consumo"
                type="number"
                value={consumoSimples}
                onChange={(e) => setConsumoSimples(Number(e.target.value))}
                min="0"
              />
            </div>
          )}

          {tipoConsumo === 'bi_horario' && (
            <>
              <div className="control-group">
                <label>Consumo Fora de Vazio (kWh):</label>
                <input
                  type="number"
                  value={consumoBiHorarioFora}
                  onChange={(e) => setConsumoBiHorarioFora(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div className="control-group">
                <label>Consumo Vazio (kWh):</label>
                <input
                  type="number"
                  value={consumoBiHorarioVazio}
                  onChange={(e) => setConsumoBiHorarioVazio(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div className="info-box">
                <strong>Total:</strong> {consumoTotal.toFixed(2)} kWh/mês
              </div>
            </>
          )}

          {tipoConsumo === 'tri_horario' && (
            <>
              <div className="control-group">
                <label>Consumo Ponta (kWh):</label>
                <input
                  type="number"
                  value={consumoTriHorarioPonta}
                  onChange={(e) => setConsumoTriHorarioPonta(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div className="control-group">
                <label>Consumo Cheias (kWh):</label>
                <input
                  type="number"
                  value={consumoTriHorarioCheias}
                  onChange={(e) => setConsumoTriHorarioCheias(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div className="control-group">
                <label>Consumo Vazio (kWh):</label>
                <input
                  type="number"
                  value={consumoTriHorarioVazio}
                  onChange={(e) => setConsumoTriHorarioVazio(Number(e.target.value))}
                  min="0"
                />
              </div>
              <div className="info-box">
                <strong>Total:</strong> {consumoTotal.toFixed(2)} kWh/mês
              </div>
            </>
          )}

          <div className="control-group">
            <label>Valor Atualmente Pago (€/mês):</label>
            <input
              id="valorAtual"
              type="number"
              value={valorAtualMensal}
              onChange={(e) => setValorAtualMensal(Number(e.target.value))}
              min="0"
              step="0.01"
            />
          </div>

          <div className="control-group">
            <label>Número de Dias:</label>
            <input
              id="numeroDias"
              type="number"
              value={numeroDias}
              onChange={(e) => setNumeroDias(Number(e.target.value))}
              min="1"
              max="365"
              step="1"
            />
          </div>
        </div>

        {/* Seleção de Tarifários */}
        <div className="panel">
          <h2>Selecionar Tarifários</h2>

          <div className="button-group">
            <button onClick={selectAll}>Selecionar Todos</button>
            <button onClick={deselectAll}>Desselecionar Todos</button>
          </div>

          {Object.entries(TARIFARIO_GRUPOS).map(([grupo, keys]) => (
            <div key={grupo} className="grupo">
              <button className="grupo-btn" onClick={() => toggleGrupo(grupo)}>
                {grupo}
              </button>
              <div className="checkbox-group">
                {keys.map((key) => {
                  const tarifa = TARIFARIOS[key as keyof typeof TARIFARIOS];
                  return (
                    <label key={key}>
                      <input
                        type="checkbox"
                        checked={selectedTarifarios.has(key)}
                        onChange={() => toggleTarifario(key)}
                      />
                      {(tarifa as any).nome}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Resultados */}
        <div className="panel results-panel">
          <h2>Resultados da Simulação</h2>
          <p className="params-info">
            Potência: {potenciaContratada} kVA | Consumo: {consumoTotal.toFixed(2)} kWh/mês | Valor Atual: {valorAtualMensal.toFixed(2)}€/mês
          </p>

          <table className="results-table">
            <thead>
              <tr>
                <th>Tarifário</th>
                <th>€/dia (Potência)</th>
                <th>€/kWh (Energia)</th>
                <th>Custo Mensal (€)</th>
                <th>Economia (€)</th>
                <th>Comissão (€)</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((resultado, index) => (
                <tr 
                  key={resultado.tarifarioKey} 
                  className={`
                    ${index === 0 ? 'best-option' : ''} 
                    ${resultado.economia > 0 ? 'savings' : 'no-savings'}
                  `}
                >
                  <td>{resultado.nome}</td>
                  <td>{resultado.precoPotencia.toFixed(4)}</td>
                  <td>{resultado.precoEnergia ? resultado.precoEnergia.toFixed(4) : '-'}</td>
                  <td>{resultado.custoMensal.toFixed(2)}</td>
                  <td className={resultado.economia > 0 ? 'positive' : 'negative'}>
                    {resultado.economia > 0 ? '+' : ''}{resultado.economia.toFixed(2)}
                  </td>
                  <td>{resultado.comissao.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {melhorOpcao && (
            <div className="summary">
              <h3>Resumo</h3>
              <div className="summary-item">
                <strong>Melhor Opção (Maior Comissão):</strong> {melhorOpcao.nome}
                <span className="best-price">{melhorOpcao.custoMensal.toFixed(2)}€/mês</span>
              </div>
              <div className="summary-item">
                <strong>Comissão:</strong> {melhorOpcao.comissao.toFixed(2)}€
              </div>
              {segundaOpcao && (
                <div className="summary-item">
                  <strong>Diferença para a 2ª opção:</strong>
                  <span className="difference">{diferenca.toFixed(2)}€/mês</span>
                </div>
              )}
              
              {tarifarioComMaiorEconomia.economia > 0 && (
                <div className="summary-item highlight">
                  <strong>💰 Maior Economia:</strong> {tarifarioComMaiorEconomia.nome}
                  <span className="savings-amount">
                    {tarifarioComMaiorEconomia.economia.toFixed(2)}€/mês ({tarifarioComMaiorEconomia.economiaAnual.toFixed(2)}€/ano)
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        Simulador de Tarifários de Energia • Dados atualizados a 04/03/2026
      </footer>
    </div>
  );
}

export default App;
