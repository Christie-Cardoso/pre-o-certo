import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calculator, RotateCcw, DollarSign } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    // Dados do Produto
    custoMercadoria: '',
    margemDesejada: '12',
    
    // Custos de Frete
    taxaFrete: '',
    receitaFrete: '',
    custoEnvio: '',
    
    // Descontos
    desconto: '',
    subsidioDesconto: '',
    
    // Taxas Percentuais
    impostoEfetivo: '',
    comissao: '',
    taxaVenda: '',
    outrosCustos: ''
  })

  const [precoCalculado, setPrecoCalculado] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calcularPreco = () => {
    const {
      custoMercadoria,
      margemDesejada,
      taxaFrete,
      receitaFrete,
      custoEnvio,
      desconto,
      subsidioDesconto,
      impostoEfetivo,
      comissao,
      taxaVenda,
      outrosCustos
    } = formData

    // Converter strings para números
    const custo = parseFloat(custoMercadoria) || 0
    const margem = parseFloat(margemDesejada) || 0
    const tFrete = parseFloat(taxaFrete) || 0
    const rFrete = parseFloat(receitaFrete) || 0
    const cEnvio = parseFloat(custoEnvio) || 0
    const desc = parseFloat(desconto) || 0
    const subDesc = parseFloat(subsidioDesconto) || 0
    const imposto = parseFloat(impostoEfetivo) || 0
    const com = parseFloat(comissao) || 0
    const tVenda = parseFloat(taxaVenda) || 0
    const outros = parseFloat(outrosCustos) || 0

    // Cálculo do preço de venda
    // Custos totais = custo da mercadoria + custos de frete + custos de envio - descontos
    const custosFixos = custo + tFrete + cEnvio - desc - rFrete

    // Percentuais totais (margem + taxas - subsídios)
    const percentuaisTotal = margem + imposto + com + tVenda + outros - subDesc

    // Preço de venda = custos fixos / (1 - percentuais/100)
    const denominador = 1 - (percentuaisTotal / 100)
    
    if (denominador <= 0) {
      alert('Erro: As taxas percentuais são muito altas, resultando em um cálculo inviável.')
      return
    }

    const precoVenda = custosFixos / denominador
    setPrecoCalculado(precoVenda)
  }

  const limparFormulario = () => {
    setFormData({
      custoMercadoria: '',
      margemDesejada: '12',
      taxaFrete: '',
      receitaFrete: '',
      custoEnvio: '',
      desconto: '',
      subsidioDesconto: '',
      impostoEfetivo: '',
      comissao: '',
      taxaVenda: '',
      outrosCustos: ''
    })
    setPrecoCalculado(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Preço Certo</h1>
          </div>
          <p className="text-gray-600">Calculadora de Preços de Venda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            {/* Dados do Produto */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Dados do Produto
                </CardTitle>
                <CardDescription>
                  Preencha os campos abaixo para calcular o preço de venda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="custoMercadoria">Custo da Mercadoria *</Label>
                    <Input
                      id="custoMercadoria"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.custoMercadoria}
                      onChange={(e) => handleInputChange('custoMercadoria', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="margemDesejada">Margem Desejada (%) *</Label>
                    <Input
                      id="margemDesejada"
                      type="number"
                      step="0.01"
                      placeholder="12"
                      value={formData.margemDesejada}
                      onChange={(e) => handleInputChange('margemDesejada', e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Mínimo: 12%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custos de Frete */}
            <Card>
              <CardHeader>
                <CardTitle>Custos de Frete</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="taxaFrete">Taxa de Frete</Label>
                    <Input
                      id="taxaFrete"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.taxaFrete}
                      onChange={(e) => handleInputChange('taxaFrete', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="receitaFrete">Receita de Frete</Label>
                    <Input
                      id="receitaFrete"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.receitaFrete}
                      onChange={(e) => handleInputChange('receitaFrete', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="custoEnvio">Custo de Envio</Label>
                  <Input
                    id="custoEnvio"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    value={formData.custoEnvio}
                    onChange={(e) => handleInputChange('custoEnvio', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Descontos */}
            <Card>
              <CardHeader>
                <CardTitle>Descontos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="desconto">Desconto</Label>
                    <Input
                      id="desconto"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.desconto}
                      onChange={(e) => handleInputChange('desconto', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subsidioDesconto">Subsídio de Desconto</Label>
                    <Input
                      id="subsidioDesconto"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.subsidioDesconto}
                      onChange={(e) => handleInputChange('subsidioDesconto', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-6">
            {/* Taxas Percentuais */}
            <Card>
              <CardHeader>
                <CardTitle>Taxas Percentuais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="impostoEfetivo">% Imposto Efetivo</Label>
                    <Input
                      id="impostoEfetivo"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.impostoEfetivo}
                      onChange={(e) => handleInputChange('impostoEfetivo', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="comissao">% Comissão</Label>
                    <Input
                      id="comissao"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.comissao}
                      onChange={(e) => handleInputChange('comissao', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="taxaVenda">% Taxa de Venda</Label>
                    <Input
                      id="taxaVenda"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.taxaVenda}
                      onChange={(e) => handleInputChange('taxaVenda', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="outrosCustos">% Outros Custos</Label>
                    <Input
                      id="outrosCustos"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.outrosCustos}
                      onChange={(e) => handleInputChange('outrosCustos', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resultado */}
            {precoCalculado !== null && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Preço de Venda Calculado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    R$ {precoCalculado.toFixed(2).replace('.', ',')}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Botões */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={calcularPreco}
                className="bg-gray-600 hover:bg-gray-700 text-white"
                size="lg"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Calcular Preço
              </Button>
              <Button 
                onClick={limparFormulario}
                variant="outline"
                size="lg"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Limpar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

