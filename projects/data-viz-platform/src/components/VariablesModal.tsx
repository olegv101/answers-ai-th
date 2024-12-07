import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, Sparkles, RotateCcw, Plus, Check } from 'lucide-react'
import { Button } from './ui/Button'
import { useState } from 'react'

interface Variable {
    name: string
    active?: boolean
}

interface VariableCategory {
    name: string
    variables: Variable[]
}

const categories: VariableCategory[] = [
    {
        name: 'Variable category 1',
        variables: [
            { name: 'Carbon 1' },
            { name: 'Co2 Distribution', active: true },
            { name: 'Fleet sizing', active: true },
        ],
    },
    {
        name: 'Variable Category 2',
        variables: [
            { name: 'Parking Rate' },
            { name: 'Border Rate', active: true },
            { name: 'Request rate', active: true },
            { name: 'Variable 1' },
            { name: 'Variable 2' },
            { name: 'Variable 3', active: true },
        ],
    },
    {
        name: 'Variable Category 3',
        variables: [
            { name: 'Variable 1' },
            { name: 'Variable 2', active: true },
            { name: 'Variable 3', active: true },
        ],
    },
]

interface VariablesModalProps {
    isOpen: boolean
    onClose: () => void
}

export function VariablesModal({ isOpen, onClose }: VariablesModalProps) {
    const [search, setSearch] = useState('')

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="fixed right-0 top-0 h-screen w-[691px] bg-[#0E0D0D] border-l border-b border-[#525252] shadow-2xlxl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-[#525252]">
                                <h2 className="text-[24px] font-semibold text-white">Edit Variables</h2>
                                <Button variant="icon" onClick={onClose}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex gap-2">
                                    <div className="relative w-full">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#EDEDED]/80" />
                                        <input
                                            type="search"
                                            className="w-full rounded-[5px] border border-[#5A5A5A] bg-[#2C2E334D]/30 pl-8 pr-3 py-1.5 text-sm text-[#EDEDED] placeholder-[#EDEDED]/80 focus:border-white/40 focus:outline-none"
                                            placeholder="Search"
                                        />
                                    </div>
                                    <Button variant="standard" className="px-4 flex flex-row items-center">
                                        <Sparkles className="h-4 w-4 mr-2" />
                                        Autofill
                                    </Button>
                                    <Button variant="standard" className="px-4 flex flex-row items-center text-[#C9FF3B] border border-[#C9FF3B] bg-[#C9FF3B]/10">
                                        <RotateCcw className="h-4 w-4 mr-2" />
                                        Rerun
                                    </Button>
                                </div>

                                <div className="space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto pr-4">
                                    {categories.map((category) => (
                                        <div key={category.name} className="space-y-3">
                                            <h3 className="text-[16px] text-sm font-medium px-2">{category.name}</h3>
                                            <div className="flex flex-wrap gap-2 p-3 rounded-xl">
                                                {category.variables.map((variable) => (
                                                    <Button
                                                        key={variable.name}
                                                        variant="standard"
                                                        className={`${variable.active
                                                                ? 'bg-[#3f4d27] text-[#C9FF3B] flex flex-row items-center px-2 rounded-full'
                                                                : 'flex flex-row items-center px-2'
                                                            }`}
                                                    >
                                                        {variable.name}
                                                        {variable.active ? (
                                                            <Check className="ml-2 h-4 w-4" />
                                                        ) : (
                                                            <Plus className="ml-2 h-4 w-4" />
                                                        )}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
} 