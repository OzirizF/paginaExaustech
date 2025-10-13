# Checklist de Elementos Interativos - Interface Web Exaustech

## ✅ Status da Implementação
- ✅ **Implementado e Funcional**: Elemento conectado ao backend com handler ativo
- ⚠️ **Parcialmente Implementado**: Elemento presente mas com funcionalidade limitada
- ❌ **Bloqueado/Não Implementado**: Elemento desabilitado por `initUnsupported()`
- 📊 **Somente Leitura**: Elemento de visualização sem interação

---

## 🎨 TOOLBAR (Header)

### Seleção de Tema
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#themeAuto` | Button | ✅ | Aplica tema automático (sistema) e salva em localStorage | `applyTheme('auto')` |
| `#themeLight` | Button | ✅ | Aplica tema claro e salva em localStorage | `applyTheme('light')` |
| `#themeDark` | Button | ✅ | Aplica tema escuro e salva em localStorage | `applyTheme('dark')` |

### Controles Globais
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#toggleAlertGlobal` | Checkbox | ❌ | Deveria ativar/desativar alertas globalmente | Bloqueado - toast "indisponível" |
| `#btnWifiDiag` | Button | ✅ | Abre modal em "Wi-Fi" e atualiza dados | `openSettings('tabWifi')` + `fetchDados()` |
| `#btnSettings` | Button | ✅ | Abre modal de configurações | `openSettings('tabWifi')` |

### Indicadores
| ID | Tipo | Status | Comportamento |
|---|---|---|---|
| `#wifiDot` | Span | 📊 | Indicador visual (verde/vermelho) baseado em `wifiManager.isConnected()` |
| `#wifiLabel` | Span | 📊 | Texto "Wi-Fi ✓" ou "Wi-Fi ✗" |
| `#badgeSim` | Span | 📊 | Badge de simulação (oculto por padrão) |

---

## 📊 DASHBOARD (Main)

### Métricas (Valores)
| ID | Tipo | Status | Fonte de Dados |
|---|---|---|---|
| `#rpmVal` | Div | 📊 | `GET /api/dados` → `data.rpm` |
| `#tempVal` | Div | 📊 | `GET /api/dados` → `data.temperatura` |
| `#humVal` | Div | 📊 | `GET /api/dados` → `data.umidade` |
| `#pwmVal` | Div | 📊 | Calculado: `rpmToPercent(rpm)` |

### Controle de Modo
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#btnMode` | Button | ✅ | Alterna entre modo Manual/Automático do ventilador | `toggleManualMode()` → POST `/api/config` |
| `#modeBadge` | Span | 📊 | Badge visual do modo atual (class `.is-manual`) |
| `#modeText` | Strong | 📊 | Texto "MANUAL" ou "AUTO" |

### Controle PWM
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#pwmRange` | Range Input | ✅ | Ajusta RPM manual (0-100%) quando modo manual ativo | `handlePwmChange()` → POST `/api/config` |
| `#pwmRangeVal` | Strong | 📊 | Exibe valor atual do slider |

### Estatísticas
| ID | Tipo | Status | Fonte |
|---|---|---|---|
| `#uptimeText` | Span | 📊 | `GET /api/dados` → `data.system.uptime` |
| `#alertState` | Span | 📊 | Hardcoded "N/D" (não implementado) |

---

## ⚙️ CONFIGURAÇÕES - MODAL

### Estrutura do Modal
| ID | Tipo | Status | Comportamento |
|---|---|---|---|
| `#settingsModal` | Div | ✅ | Modal de configurações (abre/fecha com classe `.open`) |
| `#btnCloseSettings` | Button | ✅ | Fecha o modal | `closeSettings()` |

### Abas (Tabs)
| ID | Tipo | Status | Comportamento |
|---|---|---|---|
| `#tabWifi` | Section | ✅ | Painel de configurações Wi-Fi |
| `#tabAlert` | Section | ❌ | Painel de alertas (todos controles bloqueados) |
| `#tabAdv` | Section | ❌ | Painel avançado (todos controles bloqueados) |
| `#tabSys` | Section | ❌ | Painel de sistema (todos controles bloqueados) |

---

## 📡 TAB: WI-FI

### Cliente (STA)
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#staSsid` | Input | ✅ | Campo SSID (auto-preenchido se conectado) | Marca `dataset.dirty='1'` ao editar |
| `#staPass` | Input | ✅ | Campo senha Wi-Fi | Marca `dataset.dirty='1'` ao editar |
| `#btnSaveSTA` | Button | ✅ | Envia credenciais STA para ESP | `saveStaCredentials()` → POST `/api/config` |
| `#btnScan` | Button | ✅ | Escaneia redes e popula `#scanList` | `doScanNetworks()` → GET `/api/scan` |
| `#scanList` | Div | 📊 | Container de botões de redes encontradas | Populado dinamicamente |

### Status STA (Somente Leitura)
| ID | Tipo | Status | Fonte |
|---|---|---|---|
| `#wifiConnState` | Input (disabled) | 📊 | "Conectado" / "Desconectado" |
| `#wifiIP` | Input (disabled) | 📊 | IP local ou AP |
| `#wifiRSSI` | Input (disabled) | 📊 | Força do sinal (dBm) |
| `#wifiStaStatus` | Span | 📊 | Texto de status STA |

### Ponto de Acesso (AP)
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#apSsid` | Input | ❌ | Campo SSID do AP | Bloqueado |
| `#apPass` | Input | ❌ | Campo senha do AP (≥8 chars) | Bloqueado |
| `#modoAP` | Checkbox | ❌ | Ativa/desativa modo AP | Bloqueado |
| `#btnSaveAP` | Button | ❌ | Salva configurações AP | Bloqueado - toast "indisponível" |
| `#wifiApStatus` | Span | 📊 | Status do AP (ativo/inativo + IP) |

---

## 🚨 TAB: ALERTA

### Ações para Alertas
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#actRpmMsg` | Checkbox | ❌ | Habilita mensagem em alerta de RPM | Bloqueado |
| `#actRpmBip` | Checkbox | ❌ | Habilita bip em alerta de RPM | Bloqueado |
| `#actRpmLed` | Checkbox | ❌ | Habilita LED em alerta de RPM | Bloqueado |
| `#actTempMsg` | Checkbox | ❌ | Habilita mensagem em alerta de Temp | Bloqueado |
| `#actTempBip` | Checkbox | ❌ | Habilita bip em alerta de Temp | Bloqueado |
| `#actTempLed` | Checkbox | ❌ | Habilita LED em alerta de Temp | Bloqueado |
| `#repeatMs` | Number Input | ❌ | Intervalo de repetição de alertas (ms) | Bloqueado |
| `#btnSaveActions` | Button | ❌ | Salva configurações de ações | Bloqueado |

### Flags e Parâmetros
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#flagRpmErr` | Checkbox | ❌ | Alerta em erro de sensor RPM | Bloqueado |
| `#flagRpmRange` | Checkbox | ❌ | Alerta quando RPM fora do range | Bloqueado |
| `#flagTempErr` | Checkbox | ❌ | Alerta em erro de sensor Temp | Bloqueado |
| `#flagTempRange` | Checkbox | ❌ | Alerta quando Temp fora do range | Bloqueado |
| `#rpmMin` | Number Input | ❌ | RPM mínimo aceitável | Bloqueado |
| `#rpmMax` | Number Input | ❌ | RPM máximo aceitável | Bloqueado |
| `#tMin` | Number Input | ❌ | Temperatura mínima aceitável | Bloqueado |
| `#tMax` | Number Input | ❌ | Temperatura máxima aceitável | Bloqueado |
| `#btnSaveFlags` | Button | ❌ | Salva flags de alerta | Bloqueado |
| `#btnSaveParams` | Button | ❌ | Salva parâmetros de limites | Bloqueado |

---

## 🧪 TAB: AVANÇADO

### Modo Simulação
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#simEnable` | Checkbox | ❌ | Ativa modo de simulação (valores fixos) | Bloqueado |
| `#simRpm` | Number Input | ❌ | RPM fixo para simulação | Bloqueado |
| `#simTemp` | Number Input | ❌ | Temperatura fixa para simulação | Bloqueado |
| `#simHum` | Number Input | ❌ | Umidade fixa para simulação | Bloqueado |
| `#btnSaveSim` | Button | ❌ | Salva configurações de simulação | Bloqueado |

### Testar Alerta
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#testBip` | Checkbox | ❌ | Liga/desliga buzzer para teste | Bloqueado |
| `#testLed` | Checkbox | ❌ | Liga/desliga LED para teste | Bloqueado |

### Flags & Debug
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#fMonTempHumErr` | Checkbox | ❌ | Monitora erro de sensor Temp/Hum | Bloqueado |
| `#fMonRpmErr` | Checkbox | ❌ | Monitora erro de sensor RPM | Bloqueado |
| `#fDebug` | Checkbox | ❌ | Ativa modo debug | Bloqueado |
| `#btnSaveFlagsAdv` | Button | ❌ | Salva flags avançadas | Bloqueado |

### Log de Debug
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#btnViewLog` | Button | ❌ | Visualiza log de debug | Bloqueado |
| `#btnSaveLog` | Button | ❌ | Salva log localmente | Bloqueado |
| `#logView` | Pre | 📊 | Área de visualização do log |

---

## 🛡️ TAB: SISTEMA

### Controle de Acesso
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#sysUser` | Input | ❌ | Campo de usuário (padrão: admin) | Bloqueado |
| `#sysOld` | Password Input | ❌ | Senha antiga | Bloqueado |
| `#sysNew` | Password Input | ❌ | Nova senha | Bloqueado |
| `#sysNew2` | Password Input | ❌ | Confirmação de nova senha | Bloqueado |
| `#btnChangePass` | Button | ❌ | Altera senha de acesso | Bloqueado |

### Mapeamento de Pinos
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#pinRpm` | Number Input | ❌ | GPIO do sensor RPM (padrão: 14) | Bloqueado |
| `#pinDht` | Number Input | ❌ | GPIO do DHT (padrão: 5) | Bloqueado |
| `#pinPwm` | Number Input | ❌ | GPIO do PWM ventilador (padrão: 12) | Bloqueado |
| `#pinLed` | Number Input | ❌ | GPIO do LED de alerta (padrão: 2) | Bloqueado |
| `#pinBuz` | Number Input | ❌ | GPIO do buzzer (padrão: 4) | Bloqueado |
| `#pinBtn` | Number Input | ❌ | GPIO do botão (padrão: 0) | Bloqueado |
| `#pinWifiLed` | Number Input | ❌ | GPIO do LED Wi-Fi (padrão: 16) | Bloqueado |
| `#btnSavePins` | Button | ❌ | Salva mapeamento de pinos | Bloqueado |

### Zona de Perigo
| ID | Tipo | Status | Comportamento Esperado | Implementação |
|---|---|---|---|---|
| `#confirmReset` | Input | ❌ | Campo de confirmação (digitar "RESET") | Bloqueado |
| `#btnReset` | Button | ❌ | Restaura configurações padrão e reinicia | Bloqueado |
| `#resetInfo` | Div | 📊 | Texto informativo |

---

## 🍞 TOASTS

| ID | Tipo | Status | Comportamento |
|---|---|---|---|
| `#toasts` | Div | ✅ | Container de notificações temporárias | Função `toast(message, type, timeout)` |

---

## 📋 RESUMO DE FUNCIONALIDADES

### ✅ Totalmente Implementado (16 elementos)
- Temas (3 botões)
- Dashboard: modo manual/automático + PWM slider (2 controles)
- Wi-Fi STA: campos, salvar, scan (4 elementos)
- Navegação modal (2 botões)
- Indicadores de status (5+ spans)

### ❌ Bloqueados/Não Implementados (50+ elementos)
- Alertas globais
- Configuração de AP
- Sistema de alertas (ações, flags, parâmetros)
- Modo simulação
- Testes de hardware (bip/LED)
- Flags de monitoramento
- Log de debug
- Autenticação
- Mapeamento de pinos
- Reset de configurações

### 📊 Somente Leitura (15+ elementos)
- Métricas do dashboard
- Status de conexão Wi-Fi
- Uptime
- Valores calculados (PWM %)

---

## 🔧 ENDPOINTS DA API

### Implementados
- `GET /api/dados` - Retorna temperatura, umidade, RPM e status do sistema
- `GET /api/config` - Retorna configurações de modo manual
- `POST /api/config` - Atualiza configurações (rpm_manual, rpm_value, wifi_ssid, wifi_password)
- `GET /api/scan` - Retorna lista de redes Wi-Fi (SSID, RSSI, encriptação)
- `GET /api/system` - Retorna informações do chip (chip_id, flash_size, free_heap, uptime)

### Não Implementados
- `POST /api/config` com parâmetros de alertas, simulação, pinos, etc.
- `GET /api/log` - Log de debug
- `POST /api/reset` - Reset de configurações
- `POST /api/auth` - Autenticação

---

## 📝 NOTAS DE IMPLEMENTAÇÃO

1. **Polling**: `fetchDados()` é chamado a cada 4 segundos quando a aba está visível
2. **Persistência**: Tema é salvo em `localStorage`
3. **Validação**: Credenciais STA são validadas antes do envio (SSID não vazio)
4. **Feedback**: Toasts são exibidos em ações importantes (sucesso/erro)
5. **Estado**: Campos STA marcam `dataset.dirty` ao serem editados manualmente
6. **Desabilitação**: Elementos bloqueados têm `disabled=true` e listeners que exibem toast

---

## 🚀 PRÓXIMAS IMPLEMENTAÇÕES SUGERIDAS

### Prioridade Alta
1. ⚠️ Configuração de AP (salvar SSID/senha do AP)
2. ⚠️ Modo AP checkbox (`#modoAP`) - ligar handler

### Prioridade Média
3. Sistema de alertas básico (flags de monitoramento)
4. Parâmetros de limites (RPM/Temp min/max)

### Prioridade Baixa
5. Modo simulação
6. Testes de hardware (bip/LED)
7. Autenticação
8. Mapeamento de pinos customizado
9. Log de debug

---

**Última Atualização**: 11 de outubro de 2025  
**Versão do Firmware**: v1.0 (ESP8266 + ArduinoJson 7.x + DHT22 + RPM Monitor)
