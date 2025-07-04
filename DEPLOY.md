# Deploy no GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

## Configuração

### 1. Habilitar GitHub Pages

1. Vá para as configurações do seu repositório no GitHub
2. Navegue até **Settings** > **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Selecione a branch `gh-pages` e pasta `/ (root)`
5. Clique em **Save**

### 2. Configurar Permissões

1. Vá para **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione **Read and write permissions**
3. Marque a opção **Allow GitHub Actions to create and approve pull requests**
4. Clique em **Save**

## Como funciona

- O workflow `.github/workflows/deploy.yml` é executado automaticamente quando:
  - Há um push na branch `main`
  - Há um pull request para a branch `main`

### Passos do workflow:

1. **Checkout**: Faz checkout do código
2. **Setup Node.js**: Configura Node.js 18 com cache de npm
3. **Install dependencies**: Instala as dependências com `npm ci`
4. **Build project**: Executa `npm run build` para gerar os arquivos de produção
5. **Deploy**: Faz deploy dos arquivos da pasta `dist` para o GitHub Pages

## URL do site

Após o primeiro deploy bem-sucedido, seu site estará disponível em:
`https://[seu-usuario].github.io/teste-pratico-caramulino/`

## Troubleshooting

### Se o deploy não funcionar:

1. Verifique se o repositório é público ou se você tem GitHub Pro
2. Confirme se as permissões estão configuradas corretamente
3. Verifique os logs do workflow em **Actions** > **Deploy to GitHub Pages**

### Para fazer deploy manual:

```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist/`. 