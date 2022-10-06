import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { EAppLoadingState, IAppMenu } from '~/core/models'
import { APP_MENUS } from '~/core/models'

export const useAppStore = defineStore('app', () => {
  const route = useRoute()

  // Loading
  const loadings: Ref<Array<EAppLoadingState>> = ref([])

  const addLoading = (key: EAppLoadingState) => {
    loadings.value.push(key)
  }

  const removeLoading = (key: EAppLoadingState) => {
    loadings.value = loadings.value.filter((notification: EAppLoadingState) => notification !== key)
  }

  // Navigation
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

  // App menus
  const menus = ref(APP_MENUS)

  /**
   * Filtering Menu active
   *
   * if need add logic for role access menu
   */
  const filteredMenus = computed<IAppMenu[]>(() => {
    const activeMenus = menus.value.map(menu => ({ ...menu, isActive: route.path.includes(menu.key) }))

    // Change this if needed for menu role access
    const filteredMenus = activeMenus

    return filteredMenus
  })

  return {
    // Loading
    addLoading,
    removeLoading,
    // Navigation
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
    // Menus
    filteredMenus,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
