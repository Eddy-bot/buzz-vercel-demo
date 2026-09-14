import { useEffect, useState } from "react"

type Rider = {
  id: number
  name: string
  status: string
}

function RiderTest() {
  const [riders, setRiders] = useState<Rider[]>([])
  const [loading, setLoading] = useState(true)

  const getRiders = (): Promise<Rider[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Edwin", status: "Online" },
          { id: 2, name: "Kwame", status: "Busy" },
          { id: 3, name: "John", status: "Offline" },
        ])
      }, 2000)
    })
  }

  useEffect(() => {
    const loadRiders = async () => {
      const data = await getRiders()

      setRiders(data)
      setLoading(false)
    }

    loadRiders()
  }, [])

  if (loading) {
    return <p>Loading riders...</p>
  }

  return (
    <div>
      <h2>Riders</h2>

      {riders.map((rider) => (
        <p key={rider.id}>
          {rider.name} — {rider.status}
        </p>
      ))}
    </div>
  )
}

export default RiderTest
