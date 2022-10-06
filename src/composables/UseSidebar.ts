import type { Ref } from 'vue'

export const useSidebar = () => {
  const isSideMenuOpen: Ref<Boolean> = ref(false)
  const isPagesMenuOpen: Ref<Boolean> = ref(false)
  const isNotificationsMenuOpen: Ref<Boolean> = ref(false)
  const isProfileMenuOpen: Ref<Boolean> = ref(false)

  const closeSideMenu = () => {
    isSideMenuOpen.value = false
  }

  const togglePagesMenu = () => {
    isPagesMenuOpen.value = !isPagesMenuOpen.value
  }

  const toggleSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value
  }

  const toggleNotificationsMenu = () => {
    isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value
  }
  const closeNotificationsMenu = () => {
    isNotificationsMenuOpen.value = false
  }
  const toggleProfileMenu = () => {
    isProfileMenuOpen.value = !isProfileMenuOpen.value
  }
  const closeProfileMenu = () => {
    isProfileMenuOpen.value = false
  }

  return {
    isSideMenuOpen,
    isPagesMenuOpen,
    isNotificationsMenuOpen,
    isProfileMenuOpen,
    closeSideMenu,
    togglePagesMenu,
    toggleSideMenu,
    toggleNotificationsMenu,
    closeNotificationsMenu,
    toggleProfileMenu,
    closeProfileMenu,
  }
}
