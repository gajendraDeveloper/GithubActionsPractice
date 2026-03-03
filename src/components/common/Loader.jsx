import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen p-6 space-y-8 animate-pulse">
      
      {/* Header */}
      <div className="h-10 w-1/3 bg-gray-300 rounded" />

      {/* Hero */}
      <div className="h-56 w-full bg-gray-300 rounded-xl" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border p-4 rounded-xl space-y-4">
            <div className="h-32 bg-gray-300 rounded-lg" />
            <div className="h-4 w-3/4 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-1/2 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loader