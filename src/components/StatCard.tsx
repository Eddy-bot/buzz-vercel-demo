type StatCardProps = {
  title: string
  value: string
  change: string
  description: string
}

function StatCard({ title, value, change, description }: StatCardProps) {
  return (
    <div className="card">
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{change}</small>
      <p>{description}</p>
    </div>
  )
}

export default StatCard
