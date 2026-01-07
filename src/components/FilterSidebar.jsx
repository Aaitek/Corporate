import { motion } from 'framer-motion'
import { useState } from 'react'

const FilterSidebar = ({ filters, filterOptions, onFilterChange, searchQuery, onSearchChange, onClearFilters, title = 'Filters' }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [expandedFilters, setExpandedFilters] = useState({})

  const hasActiveFilters = Object.values(filters).some(value => value !== 'all') || searchQuery

  const toggleFilter = (key) => {
    setExpandedFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const getDisplayValue = (key, options) => {
    const currentValue = filters[key] || 'all'
    if (currentValue === 'all') {
      return options[0] // Return "All Industries", "All Services", etc.
    }
    // Find the matching option - handle different formats
    const matchingOption = options.find((opt, idx) => {
      if (idx === 0) return false // Skip "All" option
      const optionValue = opt.toLowerCase().replace(/\s+/g, '-')
      // Try exact match first
      if (optionValue === currentValue) return true
      // Try without dashes
      if (optionValue.replace(/-/g, '') === currentValue.replace(/-/g, '')) return true
      // Try matching the option text directly (case-insensitive)
      if (opt.toLowerCase() === currentValue) return true
      return false
    })
    return matchingOption || options[0]
  }

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full lg:w-80 flex-shrink-0 order-first lg:order-last"
    >
      <div className="lg:sticky lg:top-[100px] bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🔍</span>
              {title}
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:text-gray-200 transition-colors lg:hidden"
              aria-label="Toggle filters"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`${isExpanded ? 'block' : 'hidden lg:block'} p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto`}>
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-sm"
            />
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClearFilters}
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors duration-300 text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear All Filters
            </motion.button>
          )}

          {/* Filter Groups with Dropdowns */}
          {Object.entries(filterOptions).map(([key, options], index) => {
            const isFilterExpanded = expandedFilters[key] || false
            const currentValue = filters[key] || 'all'
            const displayValue = getDisplayValue(key, options)
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="space-y-2"
              >
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                
                {/* Dropdown Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleFilter(key)}
                  className="w-full group relative bg-white rounded-xl px-4 py-3 shadow-md border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                      {displayValue}
                    </span>
                    <motion.svg
                      animate={{ rotate: isFilterExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </motion.button>

                {/* Dropdown Options */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isFilterExpanded ? 'auto' : 0,
                    opacity: isFilterExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 space-y-1 bg-gray-50 rounded-lg p-2 border border-gray-200">
                    {options.map((option, idx) => {
                      const value = idx === 0 ? 'all' : option.toLowerCase().replace(/\s+/g, '-')
                      const isSelected = currentValue === value || (idx === 0 && currentValue === 'all')
                      
                      return (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            onFilterChange(key, value)
                            setExpandedFilters(prev => ({ ...prev, [key]: false }))
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            isSelected
                              ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md'
                              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {isSelected && (
                              <motion.svg
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </motion.svg>
                            )}
                            {option}
                          </span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.aside>
  )
}

export default FilterSidebar

