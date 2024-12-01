import Drawer from './drawer'

export default function SessionButton() {
  return (
    <div className="flex justify-center mt-4 md:mt-6">
      <div className="py-2 mb-9 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-900 hover:bg-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-5000 hover:text-white">
        <Drawer> Randevu Alın </Drawer>
      </div>
    </div>
  )
}
