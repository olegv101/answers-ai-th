import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, Sparkles, RotateCcw, Plus, Check, Info, ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import { useState, useRef } from 'react'

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
    const [showTooltip, setShowTooltip] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleMouseEnter = (variableName: string) => {
        if (variableName === 'Co2 Distribution') {
            timerRef.current = setTimeout(() => {
                setShowTooltip(true);
            }, 1500);
        }
    };

    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setShowTooltip(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="fixed right-0 top-0 h-screen w-[691px] bg-[#0E0D0D] border-l border-b border-[#525252] shadow-2xl z-50 px-4"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-[#525252]">
                                <h2 className="text-[24px] font-semibold text-white">Edit Variables</h2>
                                <Button variant="icon" onClick={onClose}>
                                    <X className="h-5 w-5 text-white" />
                                </Button>
                            </div>

                            <div className="p-4 ">
                                <div className="flex gap-2 mb-4">
                                    <div className="relative w-full">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#EDEDED]/80" />
                                        <input
                                            type="search"
                                            className="w-full rounded-[5px] border border-[#5A5A5A] bg-[#2C2E334D]/30 pl-8 pr-3 py-2 text-sm text-[#EDEDED] placeholder-[#EDEDED]/80 focus:border-white/40 focus:outline-none"
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

                                <div className="space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto relative border border-[#525252] bg-[#161618] rounded-[5px] px-0 py-0">
                                    {categories.map((category) => (
                                        <div className="mx-6 mt-8">
                                            <div key={category.name} className="space-y-3 mb-10">
                                                <h3 className="text-[16px] text-sm font-medium px-2 flex justify-start">
                                                    {category.name}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 p-3 rounded-xl">
                                                    {category.variables.map((variable) => (
                                                        <Button
                                                            key={variable.name}
                                                            variant="standard"
                                                            onMouseEnter={() => handleMouseEnter(variable.name)}
                                                            onMouseLeave={handleMouseLeave}
                                                            className={`${variable.active
                                                                ? 'bg-[#282E16] border border-[#C9FF3B] text-[#C9FF3B] hover:shadow-[0_0_15px_rgba(201,255,59,0.3)] transition-shadow duration-100'
                                                                : 'flex flex-row items-center px-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-shadow duration-100'
                                                                } flex flex-row items-center px-4 rounded-full`}
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
                                        </div>
                                    ))}
                                    <AnimatePresence>
                                        {showTooltip && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.2,
                                                        ease: "easeOut"
                                                    }
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                    transition: {
                                                        duration: 0.15,
                                                        ease: "easeIn"
                                                    }
                                                }}
                                                className="w-full bg-[#222324] border-t border-[#525252] rounded-br-lg rounded-bl-lg p-8 mb-4 shadow-lg"
                                            >
                                                <h4 className="flex flex-row items-center text-white text-[18px] font-medium mb-2 -pl-4">CO2 Distribution Details <Info className="ml-2 h-4 w-4" /></h4>
                                                <p className="text-[15px] text-[#BBBBBB] max-w-xl text-left">
                                                    This variable represents the distribution pattern of CO2 emissions across different operational zones and time periods.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between bg-[#222324] border border-[#525252] rounded-[4px] p-4 mx-4 mb-4 items-center">
                                <h1 className="text-[20px] text-[#C8E972] font-normal">Primary Variables</h1>
                                <div className="px-3 py-1 border border-[#C9FF3B] rounded-full">
                                    <ChevronDown className="text-[#C9FF3B] h-5 w-5" />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between bg-[#222324] border border-[#525252] rounded-[4px] p-4 mx-4 items-center">
                                <h1 className="text-[20px] text-[#C8E972] font-normal">Secondary Variables</h1>
                                <div className="px-3 py-1 border border-[#C9FF3B] rounded-full">
                                    <ChevronDown className="text-[#C9FF3B] h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
} 