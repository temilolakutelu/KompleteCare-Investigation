<!-- Please remove this file from your project -->
<template>
  <div id="sidemenu">
    <ul class="navigation__lists">
      <li class="navigation__list-item active">
        <nuxt-link to="" class="nav-link">
          <svg>
            <use xlink:href="/icons/icons.svg#dashboard"></use>
          </svg>

          <span class="prefix" style="font-weight: bolder">Dashboard</span>
        </nuxt-link>
      </li>

      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#profile"></use>
          </svg>
          <span class="prefix">Profile</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#services"></use>
          </svg>
          <span class="prefix">Services</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#records"></use>
          </svg>
          <span class="prefix">Medical Records</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#wallet"></use>
          </svg>
          <span class="prefix">Care Wallet</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#messages"></use>
          </svg>
          <span class="prefix">Messages</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#resources"></use>
          </svg>
          <span class="prefix">Resources</span>
        </nuxt-link>
      </li>
    </ul>
    <hr class="divider">
    <ul class="navigation__lists">

      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#settings"></use>
          </svg>
          <span class="prefix">Account Settings</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#support"></use>
          </svg>
          <span class="prefix">Contact Support</span>
        </nuxt-link>
      </li>
      <li class="navigation__list-item">
        <nuxt-link to=" " class="nav-link">
          <svg class="">
            <use xlink:href="/icons/icons.svg#logout"></use>
          </svg>
          <span class="prefix">Logout</span>
        </nuxt-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>
