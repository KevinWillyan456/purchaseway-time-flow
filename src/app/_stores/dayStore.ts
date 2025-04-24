import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Day } from '../(public)/activities/page'

interface DayStore {
  selectedDay: Day
  setSelectedDay: (day: Day) => void
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

export const useDayStore = create<DayStore>()(
  persist(
    (set) => ({
      selectedDay: { id: '1', value: 'default', label: 'Padrão' },
      setSelectedDay: (day) => set({ selectedDay: day }),
      isLoading: true,
      setLoading: (loading) => set({ isLoading: loading })
    }),
    {
      name: 'day-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setLoading(false)
        }
      }
    }
  )
)
