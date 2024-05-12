<script setup lang="ts">
import { reactive } from 'vue'
const user = reactive({
  username: 'lil_baby_aidy',
  email: 'superfake@email.info',
  region: 'US',
  streamingServices: ['YouTube Premium', 'BBC iPlayer', 'Peacock']
})

const saveUserProfile = () => {
  alert('user profile saved')
}
</script>

<template>
  <main class="edit-profile">
    <form @submit.prevent="saveUserProfile">
      <fieldset>
        <label for="InputUsername" class="input-label">Username</label>
        <input id="InputUsername" type="text" v-model="user.username" disabled readonly />
      </fieldset>
      <fieldset>
        <label for="InputEmail" class="input-label required">Email Address</label>
        <input id="InputEmail" type="email" v-model="user.email" />
      </fieldset>
      <fieldset>
        <label for="InputRegion" class="input-label required">What Country Are You In?</label>
        <select id="InputRegion">
          <option val="US">United States</option>
          <option val="UK">United Kingdom</option>
          <option val="AU">Australia</option>
          <option val="ES">Spain</option>
          <option val="PT">Portugal</option>
          <option val="DE">Germany</option>
          <option val="UA">Ukraine</option>
        </select>
      </fieldset>
      <fieldset class="checkboxes">
        <legend>What services do you use?</legend>
        <label>
          <input type="checkbox" v-model="user.streamingServices" value="Netflix" />
          <span>Netflix</span>
        </label>
        <label>
          <input value="Disney+" type="checkbox" v-model="user.streamingServices" />
          <span>Disney+</span>
        </label>
        <label>
          <input value="Hulu" type="checkbox" v-model="user.streamingServices" />
          <span>Hulu</span>
        </label>
        <label>
          <input value="Amazon Prime" type="checkbox" v-model="user.streamingServices" />
          <span>Amazon Prime</span>
        </label>
        <label>
          <input value="Tencent Video" type="checkbox" v-model="user.streamingServices" />
          <span>Tencent Video</span>
        </label>
        <label>
          <input value="YouTube Premium" type="checkbox" v-model="user.streamingServices" />
          <span>YouTube Premium</span>
        </label>
        <label>
          <input value="HBO Max / Discovery" type="checkbox" v-model="user.streamingServices" />
          <span>HBO Max / Discovery</span>
        </label>
        <label>
          <input value="Paramount+" type="checkbox" v-model="user.streamingServices" />
          <span>Paramount+</span>
        </label>
        <label>
          <input value="Apple TV+" type="checkbox" v-model="user.streamingServices" />
          <span>Apple TV+</span>
        </label>
        <label>
          <input value="Peacock" type="checkbox" v-model="user.streamingServices" />
          <span>Peacock</span>
        </label>
        <label>
          <input value="Starz" type="checkbox" v-model="user.streamingServices" />
          <span>Starz</span>
        </label>
        <label>
          <input value="Curiosity Stream" type="checkbox" v-model="user.streamingServices" />
          <span>Curiosity Stream</span>
        </label>
        <label>
          <input value="Crunchyroll" type="checkbox" v-model="user.streamingServices" />
          <span>Crunchyroll</span>
        </label>
        <label>
          <input value="Binge" type="checkbox" v-model="user.streamingServices" />
          <span>Binge</span>
        </label>
        <label>
          <input value="Crackle" type="checkbox" v-model="user.streamingServices" />
          <span>Crackle</span>
        </label>
        <label>
          <input value="Pluto TV" type="checkbox" v-model="user.streamingServices" />
          <span>Pluto TV</span>
        </label>
        <label>
          <input value="Tubi" type="checkbox" v-model="user.streamingServices" />
          <span>Tubi</span>
        </label>
        <label>
          <input value="Facebook Watch" type="checkbox" v-model="user.streamingServices" />
          <span>Facebook Watch</span>
        </label>
        <label>
          <input value="ABC iview" type="checkbox" v-model="user.streamingServices" />
          <span>ABC iview</span>
        </label>
        <label>
          <input value="BBC iPlayer" type="checkbox" v-model="user.streamingServices" />
          <span>BBC iPlayer</span>
        </label>
        <label>
          <input value="SBS On Demand" type="checkbox" v-model="user.streamingServices" />
          <span>SBS On Demand</span>
        </label>
      </fieldset>
      <div class="button-holder">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<style lang="scss" scoped src="./UserProfile.scss">

</style>
