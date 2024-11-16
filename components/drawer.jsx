import { HStack } from '@chakra-ui/react'

import {
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/components/ui/drawer'

import ContactMePage from '@/components/contact-form'

export default function Drawer({ children }) {
  return (
    <div>
      <HStack>
        <DrawerRoot size="full">
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <button>{children ? children : 'İletişim'}</button>
          </DrawerTrigger>
          <DrawerContent>
            <ContactMePage />

            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
    </div>
  )
}
