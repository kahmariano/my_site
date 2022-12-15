import { HomeWrapper } from './styles'
import CreateGlobalStyle from '../styles/global'
import Image from 'next/image'
export function HomePage() {
  return (
    <HomeWrapper>
      <CreateGlobalStyle />
      <div>
        <Image
          alt="kah mariano"
          src="/kahmariano.jpeg"
          width={200}
          height={200}
          // blurDataURL="/kahmariano.jpeg"
          style={{
            borderRadius: '50%'
          }}
        />
      </div>

      <h1>
        Karina Mariano
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap')
        </style>
      </h1>
      <p>Atualmente barbeira, me ariscando em programação</p>
      <a
        href="https://www.linkedin.com/in/karina-mariano-278a2b175/"
        target="blank"
      >
        <img src="" alt="linkedin" />
      </a>
      <a href="https://www.instagram.com/kahbarber/" target="blank">
        <img src="" alt="instagran" />
      </a>
      <a href="https://github.com/kahmariano/" target="blank">
        <img src="" alt="github" />
      </a>
    </HomeWrapper>
  )
}
