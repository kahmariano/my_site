import { HomeWrapper, Imagediv, Conteudo, Links } from './styles'
import CreateGlobalStyle from '../styles/global'
import Image from 'next/image'
export function HomePage() {
  return (
    <HomeWrapper>
      <CreateGlobalStyle />
      <Imagediv>
        <Image
          alt="kah mariano"
          src="/kahmariano.jpeg"
          width={200}
          height={200}
          blurDataURL="/kahmariano.jpeg"
          style={{
            borderRadius: '40%'
          }}
        />
      </Imagediv>

      <Conteudo>
        <h1>
          Karina Mariano
        </h1>
        <p>Atualmente barbeira, me ariscando em programação</p>
      </Conteudo>
      <Links>
        <a
          href="https://www.linkedin.com/in/karina-mariano-278a2b175/"
          target="blank"
        >
          <Image
            alt="linkedin"
            src="/linkedin.png"
            width={30}
            height={30}
            blurDataURL="/linkedin.png"
            style={{
              borderRadius: '40%'
            }}
          />
        </a>
        <a href="https://www.instagram.com/kahbarber/" target="blank">
          <Image
            alt="instagram"
            src="/instagram.png"
            width={30}
            height={30}
            blurDataURL="/instagram.png"
            style={{
              borderRadius: '40%'
            }}
          />
        </a>
        <a href="https://github.com/kahmariano/" target="blank">
          <Image
            alt="github"
            src="/github.png"
            width={30}
            height={30}
            blurDataURL="/github.png"
            style={{
              borderRadius: '40%'
            }}
          />
        </a>
      </Links>
    </HomeWrapper>
  )
}
