export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: Array<{
    title: string
    icon: {
      alternativeText: string
      url: string
    }
  }>
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  discountPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    photo: {
      alternativeText: string
      url: string
    }
    name: string
    role: string
    socialLinks: Array<{
      title: string
      url: string
    }>
    description: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
}
