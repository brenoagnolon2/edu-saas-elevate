

## Fundo Premium no Mobile

Atualmente, todo o componente de efeitos de fundo esta oculto no mobile (`hidden md:block`), resultando em um fundo preto neutro. A solucao e mostrar os elementos estaticos (gradientes e texturas) no mobile, mantendo ocultos apenas os elementos animados (hexagonos, particulas, shimmer, circulos giratorios) que causam lentidao.

### O que sera feito

No arquivo `BackgroundEffects.tsx`:

1. **Container principal**: Remover `hidden md:block` para que o fundo apareca em todas as telas
2. **Manter ocultos no mobile apenas os elementos com animacao pesada**:
   - Circulos concentricos com `animate-spin-slow` (ja tem `hidden md:block`)
   - Hexagonos decorativos (ja tem `hidden lg:block`)
   - Particulas flutuantes (ja tem `hidden lg:block`)
   - Linhas neurais SVG (ja tem `hidden md:block`)
   - Scan lines - adicionar `hidden md:block`
   - Shimmer effect (ja tem `hidden lg:block`)
   - Codigo binario (ja tem `hidden xl:block`)
3. **Mostrar no mobile (elementos estaticos, sem animacao)**:
   - Grid pattern base (pontos)
   - Noise texture
   - Gradientes radiais (3 blobs)
   - Mesh gradient
   - Grid lines tecnologico

Isso garante que o mobile tera os mesmos gradientes roxos e texturas do desktop, sem impacto na performance de scroll.

### Detalhes tecnicos

- Arquivo modificado: `src/components/BackgroundEffects.tsx`
- Linha 3: remover `hidden md:block` do container principal
- Linha 155-160: adicionar `hidden md:block` ao elemento de scan lines (unico elemento estatico com animacao que falta restringir)
- Todos os demais elementos animados ja possuem classes `hidden md:block` ou `hidden lg:block`

