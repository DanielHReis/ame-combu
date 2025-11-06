const TEXTS = {
  pt: {
    title: "AME Combu - Associação das Mulheres Extrativistas",
    p1: "A AME Combu é a Associação das Mulheres Extrativistas do Combu, localizada na Ilha do Combu, em Belém, Pará.",
    p2: "Formada por mulheres da comunidade de Periquitaquara, a associação nasceu com o objetivo de valorizar os saberes tradicionais e promover o extrativismo sustentável da andiroba.",
    p3: "A AME gera emprego e renda para famílias locais e fortalece o papel da mulher na preservação ambiental.",
    p4: "Atualmente, a associação produz óleos, sabonetes, cremes e repelentes naturais à base de andiroba.",
    btn: "Mudar para Inglês"
  },
  en: {
    title: "AME Combu - Association of Women Extractivists",
    p1: "AME Combu is located on Combu Island, in Belém, Pará, Brazil.",
    p2: "Formed by women from the Periquitaquara community, the association was created to preserve traditional knowledge and promote sustainable andiroba extraction.",
    p3: "AME creates employment and income for local families while strengthening women's role in environmental protection.",
    p4: "Today, the association produces natural oils, soaps, creams and repellents made from andiroba.",
    btn: "Switch to Portuguese"
  }
};

let lang = 'pt';

const el = {
  title: document.getElementById('title'),
  p1: document.getElementById('p1'),
  p2: document.getElementById('p2'),
  p3: document.getElementById('p3'),
  p4: document.getElementById('p4'),
  btn: document.getElementById('toggleBtn')
};

function render() {
  const content = TEXTS[lang];
  el.title.textContent = content.title;
  el.p1.textContent = content.p1;
  el.p2.textContent = content.p2;
  el.p3.textContent = content.p3;
  el.p4.textContent = content.p4;
  el.btn.textContent = content.btn;
  document.documentElement.lang = (lang === 'pt' ? 'pt-BR' : 'en-US');
}

el.btn.addEventListener('click', () => {
  lang = (lang === 'pt') ? 'en' : 'pt';
  render();
});

render();
