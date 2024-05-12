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

<style lang="scss">
main.edit-profile {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    border: 1px solid #ccc;
    background: #fafafa;
    padding: 20px;
    width: 100%;
    max-width: 460px;
    display: grid;
    gap: 20px;
    fieldset {
      .input-label {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: #515151;
      }
      input[type='text'],
      input[type='email'],
      select {
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 0.5em 1.25em;
      }
    }
    fieldset.checkboxes {
      legend {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: #515151;
      }
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      label {
        display: inline-flex;
        gap: 10px;
        font-size: 0.9rem;
        border: 1px solid hsl(160, 100%, 37%);
        padding: 0.5em 1em;
        input {
          accent-color: hsl(160, 100%, 37%);
        }
        span {
          font-weight: 525;
        }
        color: hsl(160, 100%, 27%);
        cursor: pointer;
        &:hover {
          background: hsl(160, 100%, 27%, 12%);
        }
        input:checked {
          ~ span {
            color: hsl(160, 100%, 16%);
          }
        }
      }
    }
    .button-holder {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      button {
        padding: 1px solid;
        padding: 0.5em 1.25em;
        font-size: 1.1em;
        text-transform: uppercase;
        font-weight: 625;
      }
      button[type='submit'] {
        background-color: hsl(160, 100%, 32%);
        color: hsl(160, 100%, 95%);
        border: 1px solid hsl(160, 100%, 22%);
      }
      button[type='reset'] {
        background-color: hsl(160, 100%, 95%);
        color: hsl(160, 100%, 18%);
        border: 1px solid hsl(160, 100%, 22%);
      }
    }
  }
}
</style>
