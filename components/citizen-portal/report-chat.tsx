'use client'

import { useState } from 'react'
import { Send, Paperclip, X } from 'lucide-react'

interface ChatMessage {
  id: string
  sender: 'citizen' | 'official'
  name: string
  message: string
  timestamp: string
  attachments?: { name: string; size: string }[]
}

interface ReportChatProps {
  reportId: string
  officialName: string
}

export function ReportChat({ reportId, officialName }: ReportChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'official',
      name: officialName,
      message: 'Hello, I am reviewing your report. Please provide any additional evidence or details that might help with the investigation.',
      timestamp: '10:30 AM',
    },
    {
      id: '2',
      sender: 'citizen',
      name: 'You',
      message: 'Thank you for looking into this. I have attached photos of the issue as evidence.',
      timestamp: '10:35 AM',
      attachments: [
        { name: 'evidence_01.jpg', size: '2.4 MB' },
        { name: 'evidence_02.jpg', size: '1.8 MB' },
      ],
    },
  ])

  const [inputValue, setInputValue] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleSendMessage = () => {
    if (inputValue.trim() === '' && selectedFiles.length === 0) return

    const newMessage: ChatMessage = {
      id: String(messages.length + 1),
      sender: 'citizen',
      name: 'You',
      message: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      attachments: selectedFiles.map((file) => ({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      })),
    }

    setMessages([...messages, newMessage])
    setInputValue('')
    setSelectedFiles([])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Chat Header */}
      <div className="border-b border-border bg-card p-4">
        <h2 className="text-lg font-bold text-foreground">Report #{reportId}</h2>
        <p className="text-sm text-muted-foreground">Chatting with {officialName}</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'citizen' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md ${msg.sender === 'citizen' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} rounded-lg p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-semibold">{msg.name}</p>
                <span className="text-xs opacity-75">{msg.timestamp}</span>
              </div>
              <p className="text-sm mb-3">{msg.message}</p>

              {/* Attachments */}
              {msg.attachments && msg.attachments.length > 0 && (
                <div className="space-y-2 mt-3 pt-3 border-t border-current border-opacity-20">
                  {msg.attachments.map((attachment, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <Paperclip className="h-3 w-3" />
                      <span>{attachment.name}</span>
                      <span className="opacity-75">({attachment.size})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card p-6">
        {/* File Preview */}
        {selectedFiles.length > 0 && (
          <div className="mb-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Attached Files:</p>
            {selectedFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{file.name}</span>
                  <span className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
                </div>
                <button
                  onClick={() => removeFile(idx)}
                  className="p-1 hover:bg-border rounded transition-colors"
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Message Input */}
        <div className="flex gap-3">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            placeholder="Type your message or attach evidence files..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none max-h-24"
            rows={2}
          />
          <div className="flex flex-col gap-2">
            <label className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors bg-secondary/20">
              <Paperclip className="h-5 w-5 text-primary" />
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
            </label>
            <button
              onClick={handleSendMessage}
              className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              disabled={inputValue.trim() === '' && selectedFiles.length === 0}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Press Shift+Enter for new line</p>
      </div>
    </div>
  )
}
