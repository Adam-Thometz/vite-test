<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import WATCHMODE_API_KEY from '@/secret';
const router = useRouter()

const searchData = reactive({
  input: ''
})

const submitSearchForm = async () => {
  const titleToSearch = searchData.input
  const url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${WATCHMODE_API_KEY}&search_value=${encodeURI(titleToSearch)}&search_type=4`
  const { results } = await (await fetch(url)).json()
  // debugger
  const showId = results[0].id
  router.push({ path: `/show/${showId}` })
  alert('form submitted')
}
</script>

<template>
  <form @submit.prevent="submitSearchForm">
    <fieldset>
      <input
        type="search"
        v-model="searchData.input"
        placeholder="search for a show..."
        list="AutocompleteSuggestions"
        size="20"
      />
      <button type="submit">GO</button>
      <datalist id="AutocompleteSuggestions">
        <option>Succession</option>
        <option>Taskmaster (UK)</option>
        <option>Taskmaster (NZ)</option>
        <option>Ted Lasso</option>
        <option>That Mitchell And Web Look</option>
        <option>The Amazing World of Gumball</option>
        <option>The Blue Planet</option>
        <option>The Colbert Report</option>
        <option>The Curse</option>
      </datalist>
    </fieldset>
  </form>
</template>

<style lang="scss" scoped src="./Search.scss"></style>
