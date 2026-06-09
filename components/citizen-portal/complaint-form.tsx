'use client'

import { useState } from 'react'
import { Upload, Send } from 'lucide-react'

export function ComplaintForm() {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const categories = [
    'Corruption',
    'Police Abuse',
    'Healthcare',
    'Education',
    'Infrastructure',
    'Other',
  ]

  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Submit a Complaint</h2>
      
      <form className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg border transition-colors font-medium text-sm ${
                  category === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border bg-background text-foreground hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Complaint Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide detailed information about your complaint..."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Be specific and include dates, times, and locations
          </p>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Attach Evidence (Optional)
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Upload photos or videos</p>
            <p className="text-xs text-muted-foreground">PNG, JPG, MP4 up to 50MB</p>
          </div>
        </div>

        {/* Anonymous Toggle */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
          <input
            type="checkbox"
            id="anonymous"
            className="w-4 h-4 accent-primary"
            defaultChecked
          />
          <label htmlFor="anonymous" className="text-sm text-foreground font-medium">
            Submit anonymously
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
        >
          <Send className="h-4 w-4" />
          Submit Complaint
        </button>
      </form>
    </div>
  )
}
