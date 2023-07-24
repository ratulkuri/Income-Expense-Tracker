const StatItem = ({icon, title, value, type}) => {
  return (
    <>
        <div className="stat">
            <div className="stat-figure text-primary">
                {icon}
            </div>
            <div className="stat-title">{title}</div>
            <div className={`stat-value ${type === "income" ? "text-green-400" : "text-red-400"}`}>{`${value} BDT`}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
    </>
  )
}

export default StatItem