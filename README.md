# Preço Certo - Calculadora de Preços

Uma aplicação React moderna para calcular preços de venda baseado em custos de mercadoria, frete, comissões e outras taxas.

## 🚀 Funcionalidades

- **Dados do Produto**: Custo da mercadoria e margem desejada
- **Custos de Frete**: Taxa de frete, receita de frete e custo de envio
- **Descontos**: Desconto e subsídio de desconto
- **Taxas Percentuais**: Imposto efetivo, comissão, taxa de venda e outros custos
- **Cálculo Automático**: Calcula o preço de venda final considerando todos os fatores
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Design Moderno**: Interface limpa e profissional usando Tailwind CSS e shadcn/ui

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface de usuário
- **Vite**: Build tool rápido e moderno
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes de interface modernos
- **Lucide React**: Ícones elegantes

## 📱 Como Usar

1. **Custo da Mercadoria**: Insira o custo base do produto
2. **Margem Desejada**: Defina a margem de lucro desejada (mínimo 12%)
3. **Custos de Frete**: Adicione taxas e custos relacionados ao frete
4. **Descontos**: Configure descontos e subsídios se aplicável
5. **Taxas Percentuais**: Insira impostos, comissões e outras taxas
6. **Calcular**: Clique em "Calcular Preço" para obter o resultado
7. **Limpar**: Use "Limpar" para resetar todos os campos

## 🧮 Fórmula de Cálculo

```
Custos Fixos = Custo da Mercadoria + Taxa de Frete + Custo de Envio - Desconto - Receita de Frete

Percentuais Totais = Margem Desejada + Imposto Efetivo + Comissão + Taxa de Venda + Outros Custos - Subsídio de Desconto

Preço de Venda = Custos Fixos / (1 - Percentuais Totais / 100)
```

## 🚀 Como Executar

### Desenvolvimento
```bash
cd preco-certo-calculator
pnpm install
pnpm run dev
```

### Build para Produção
```bash
pnpm run build
```

### Servir Build Local
```bash
cd dist
python3 -m http.server 8080
```

## 📁 Estrutura do Projeto

```
preco-certo-calculator/
├── src/
│   ├── components/ui/     # Componentes shadcn/ui
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos estáticos
├── dist/                 # Build de produção
└── README.md            # Documentação
```

## 🎨 Design

A aplicação foi desenvolvida com base na imagem fornecida, mantendo:
- Layout em duas colunas responsivo
- Seções organizadas por categoria
- Campos de entrada com validação
- Resultado destacado em verde
- Botões de ação claros

## 📝 Validações

- Campos numéricos com validação automática
- Margem mínima de 12%
- Verificação de divisão por zero
- Alertas para cálculos inviáveis



