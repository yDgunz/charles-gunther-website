import { getDesign } from '@/designs'

export default async function HomePage() {
  const { Home } = await getDesign()
  return <Home />
}
