<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// import imagePath from '@/assets/img/taskmaster-bg.jpeg'
import WATCHMODE_API_KEY from "@/secret"

const ui = reactive({
  showId: '',
  selectedRegion: 'US',
  selectedSeason: 17,

  showData: {},
  episodeData: []
})

// Sample fetch of data from URL.
// fetch(url, { method: 'Get' })
//   .then((res) => res.json())
//   .then((json) => {
//     ui.showData = {...json}
//   })

onMounted(async () => {
  if (route.params.showId) {
    ui.showId = route.params.showId.toString()
    const showUrl = `https://api.watchmode.com/v1/title/${ui.showId}/details/?apiKey=${WATCHMODE_API_KEY}`
    const episodeUrl = `https://api.watchmode.com/v1/title/${ui.showId}/episodes/?apiKey=${WATCHMODE_API_KEY}`
    try {
      const showData = await (await fetch(showUrl, {
        headers: {
          "Content-Type": "application/json",
          "Authentication": "Bearer <token>"
        }
      })).json()
      const episodeData = await (await fetch(episodeUrl)).json()
      debugger
      if (!showData.title) {
        throw new Error("Title not found")
      }
      ui.showData = showData
      ui.episodeData = episodeData
    } catch (e) {
      console.error(e)
    }
  }
})
</script>

<template>
  <main class="show">
    <!-- Title & Cover Image-->
    <hgroup :style="{ backgroundImage: `url(${ui.showData.backdrop})` }">
      <h1>{{ui.showData.title}}</h1>
    </hgroup>

    <!-- Series Info -->
    <section class="description-and-quickinfo">
      <dl class="quickinfo">
        <dt>Release Date</dt>
        <dd>{{ui.showData.release_date}}</dd>
        <dt>Episodes</dt>
        <dd>263</dd>
        <dt>Network(s)</dt>
        <dd>{{ui.showData.network_names}}</dd>
        <dt>Avg Runtime</dt>
        <dd>{{ui.showData.runtime_minutes}} minutes</dd>
      </dl>

      <div class="description">
        <p>
          {{ui.showData.plot_overview}}
        </p>
      </div>

      <div class="info-links">
        <a :href="ui.showData.trailer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>YouTube</title>
            <path
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
          </svg>
          <span>Watch Trailer</span>
        </a>
        <a :href="`https://www.imdb.com/title/${ui.showData.imdb_id}`">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>IMDb</title>
            <path
              d="M22.3781 0H1.6218C.7411.0583.0587.7437.0018 1.5953l-.001 20.783c.0585.8761.7125 1.543 1.5559 1.6191A.337.337 0 0 0 1.6016 24h20.7971a.4579.4579 0 0 0 .0437-.002c.8727-.0768 1.5568-.8271 1.5568-1.7085V1.7098c0-.8914-.696-1.6416-1.584-1.7078A.3294.3294 0 0 0 22.3781 0zm0 .496a1.2144 1.2144 0 0 1 1.1252 1.2139v20.5797c0 .6377-.4875 1.1602-1.1045 1.2145H1.6016c-.5967-.0543-1.0645-.5297-1.1053-1.1258V1.6284C.5371 1.0185 1.0184.5364 1.6217.496h20.7564zM4.7954 8.2603v7.3636H2.8899V8.2603h1.9055zm6.5367 0v7.3636H9.6707v-4.9704l-.6711 4.9704H7.813l-.6986-4.8618-.0066 4.8618h-1.668V8.2603h2.468c.0748.4476.1492.9694.2307 1.5734l.2712 1.8713.4407-3.4447h2.4817zm2.9772 1.3289c.0742.0404.122.108.1417.2034.0279.0953.0345.3118.0345.6442v2.8548c0 .4881-.0345.7867-.0955.8954-.0609.1152-.2304.1695-.5018.1695V9.5211c.204 0 .3457.0205.4211.0681zm-.0211 6.0347c.4543 0 .8006-.0265 1.0245-.0742.2304-.0477.4204-.1357.5694-.2648.1556-.1218.2642-.298.3251-.5219.0611-.2238.1021-.6648.1021-1.3224v-2.5832c0-.6986-.0271-1.1668-.0742-1.4039-.041-.237-.1431-.4543-.3126-.6437-.1695-.1973-.4198-.3324-.7456-.421-.3191-.0808-.8542-.1285-1.7694-.1285h-1.4244v7.3636h2.3051zm5.14-1.7827c0 .3523-.0199.5762-.0544.6708-.033.0947-.1894.1424-.3046.1424-.1086 0-.19-.0477-.2238-.1351-.041-.0887-.0609-.2986-.0609-.6238v-1.9469c0-.3324.0199-.5423.0543-.6237.0338-.0808.1086-.122.2171-.122.1153 0 .2709.0412.3114.1425.041.0947.0609.2986.0609.6032v1.8926zm-2.4747-5.5809v7.3636h1.7157l.1152-.4675c.1556.1894.3251.3324.5152.4271.1828.0881.4608.1357.678.1357.3047 0 .5629-.0748.7802-.237.2165-.1562.3589-.3462.4198-.5628.0543-.2173.0887-.543.0887-.9841v-2.0675c0-.4409-.0139-.7324-.0344-.8681-.0199-.1357-.0742-.2781-.1695-.4204-.1021-.1425-.2437-.251-.4272-.3325-.1834-.0742-.3999-.1152-.6576-.1152-.2172 0-.4952.0477-.6846.1285-.1835.0887-.353.2238-.5086.4007V8.2603h-1.8309z"
            />
          </svg>
          <span>IMDb page</span>
        </a>
        <a :href="`https://www.themoviedb.org/tv/${ui.showData.tmdb_id}`">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>The Movie Database</title>
            <path
              d="M6.62 12a2.291 2.291 0 0 1 2.292-2.295h-.013A2.291 2.291 0 0 1 11.189 12a2.291 2.291 0 0 1-2.29 2.291h.013A2.291 2.291 0 0 1 6.62 12zm10.72-4.062h4.266a2.291 2.291 0 0 0 2.29-2.291 2.291 2.291 0 0 0-2.29-2.296H17.34a2.291 2.291 0 0 0-2.291 2.296 2.291 2.291 0 0 0 2.29 2.29zM2.688 20.645h8.285a2.291 2.291 0 0 0 2.291-2.292 2.291 2.291 0 0 0-2.29-2.295H2.687a2.291 2.291 0 0 0-2.291 2.295 2.291 2.291 0 0 0 2.29 2.292zm10.881-6.354h.81l1.894-4.586H15.19l-1.154 3.008h-.013l-1.135-3.008h-1.154zm4.208 0h1.011V9.705h-1.011zm2.878 0h3.235v-.93h-2.223v-.933h1.99v-.934h-1.99v-.855h2.107v-.934h-3.112zM1.31 7.941h1.01V4.247h1.31v-.895H0v.895h1.31zm3.747 0h1.011V5.959h1.958v1.984h1.011v-4.59h-1.01v1.711H6.061V3.351H5.057zm5.348 0h3.242v-.933H11.41v-.934h1.99v-.933h-1.99v-.856h2.107v-.934h-3.112zM.162 14.296h1.005v-3.52h.013l1.167 3.52h.765l1.206-3.52h.013v3.52h1.011v-4.59H3.82L2.755 12.7h-.013L1.686 9.705H.156zm14.534 6.353h1.641a3.188 3.188 0 0 0 .98-.149 2.531 2.531 0 0 0 .824-.437 2.123 2.123 0 0 0 .567-.713 2.193 2.193 0 0 0 .223-.983 2.399 2.399 0 0 0-.218-1.07 1.958 1.958 0 0 0-.586-.716 2.405 2.405 0 0 0-.873-.392 4.349 4.349 0 0 0-1.046-.13h-1.519zm1.013-3.656h.596a2.26 2.26 0 0 1 .606.08 1.514 1.514 0 0 1 .503.244 1.167 1.167 0 0 1 .34.412 1.28 1.28 0 0 1 .13.587 1.546 1.546 0 0 1-.13.658 1.127 1.127 0 0 1-.347.433 1.41 1.41 0 0 1-.518.238 2.797 2.797 0 0 1-.649.07h-.538zm4.686 3.656h1.88a2.997 2.997 0 0 0 .613-.064 1.735 1.735 0 0 0 .554-.214 1.221 1.221 0 0 0 .402-.39 1.105 1.105 0 0 0 .155-.606 1.188 1.188 0 0 0-.071-.415 1.01 1.01 0 0 0-.204-.34 1.087 1.087 0 0 0-.317-.24 1.297 1.297 0 0 0-.413-.13v-.012a1.203 1.203 0 0 0 .575-.366.962.962 0 0 0 .216-.648 1.081 1.081 0 0 0-.149-.603 1.022 1.022 0 0 0-.389-.354 1.673 1.673 0 0 0-.54-.169 4.463 4.463 0 0 0-.6-.041h-1.712zm1.011-3.734h.687a1.4 1.4 0 0 1 .24.022.748.748 0 0 1 .22.075.432.432 0 0 1 .16.147.418.418 0 0 1 .061.236.47.47 0 0 1-.055.233.433.433 0 0 1-.146.156.62.62 0 0 1-.204.084 1.058 1.058 0 0 1-.23.026h-.745zm0 1.835h.765a1.96 1.96 0 0 1 .266.02 1.015 1.015 0 0 1 .26.07.519.519 0 0 1 .204.152.406.406 0 0 1 .08.26.481.481 0 0 1-.06.253.519.519 0 0 1-.16.168.62.62 0 0 1-.217.09 1.155 1.155 0 0 1-.237.027H21.4z"
            />
          </svg>
          <span>TMDB page</span>
        </a>
      </div>
    </section>

    <!-- Stream Options-->
    <section class="stream-options">
      <h2>
        Stream Options
        <span class="stream-region">(US Only)</span>
      </h2>
      <select v-model="ui.selectedRegion">
        <option value="US">Show US Services only</option>
        <option value="any">Show all regions</option>
      </select>
      <!-- 
        RULES:
        1. Show preferred subscription options first
        4. Then non-preferred subscription options
        2. Then free versions
        3. Then PPV versions, sorted cheapest to most expensive

        ALSO:
        - Begin by only showing option in your country
        - But if the user chooses Show All Countries, show all of them (with flag)
      -->
      <ol>
        <li>
          <h3>Pluto TV</h3>
          <dl>
            <dt>Service Type</dt>
            <dd>Free</dd>
            <dt>country</dt>
            <dd>US</dd>
            <dt>episodes</dt>
            <dd>43</dd>
            <dt>Format</dt>
            <dd>SD</dd>
          </dl>
          <div class="link-holder">
            <a href="https://pluto.tv/on-demand/series/taskmaster">
              <span>Taskmaster on Pluto TV</span>
              <span>→</span>
            </a>
          </div>
        </li>
        <li>
          <h3>Amazon</h3>
          <dl>
            <dt>Service Type</dt>
            <dd>Pay Per View</dd>
            <dt>Price</dt>
            <dd>$0.99</dd>
            <dt>country</dt>
            <dd>US</dd>
            <dt>episodes</dt>
            <dd>142</dd>
            <dt>Format</dt>
            <dd>HD</dd>
          </dl>
          <div class="link-holder">
            <a
              href="https://www.amazon.com/gp/video/detail/amzn1.dv.gti.be3543ab-e61c-4a87-b267-8ebf33f508d3"
            >
              <span>Taskmaster on Amazon</span>
              <span>→</span>
            </a>
          </div>
        </li>
        <li>
          <h3>Apple TV</h3>
          <dl>
            <dt>Service Type</dt>
            <dd>Pay Per View</dd>
            <dt>Price</dt>
            <dd>$1.99</dd>
            <dt>country</dt>
            <dd>US</dd>
            <dt>episodes</dt>
            <dd>142</dd>
            <dt>Format</dt>
            <dd>HD</dd>
          </dl>
          <div class="link-holder">
            <a href="#">
              <span>Taskmaster on Apple TV</span>
              <span>→</span>
            </a>
          </div>
        </li>
        <li>
          <h3>Windows Store</h3>
          <dl>
            <dt>Service Type</dt>
            <dd>Pay Per View</dd>
            <dt>Price</dt>
            <dd>$2.99</dd>
            <dt>country</dt>
            <dd>US</dd>
            <dt>episodes</dt>
            <dd>118</dd>
            <dt>Format</dt>
            <dd>HD</dd>
          </dl>
          <div class="link-holder">
            <a href="#">
              <span>Taskmaster on Windows Store</span>
              <span>→</span>
            </a>
          </div>
        </li>
      </ol>
    </section>

    <!-- Episodes -->

    <section class="epsiodes">
      <h2>
        {{ui.showData.title}} Episodes
        <span>(All Seasons)</span>
      </h2>
      <!-- <select v-model="ui.selectedSeason">
        <option value="17">Season 17</option>
        <option value="16">Season 16</option>
        <option value="15">Season 15</option>
        <option value="14">Season 14</option>
        <option value="13">Season 13</option>
        <option value="12">Season 12</option>
        <option value="11">Season 11</option>
        <option value="10">Season 10</option>
        <option value="9">Season 9</option>
        <option value="8">Season 8</option>
        <option value="7">Season 7</option>
        <option value="6">Season 6</option>
        <option value="5">Season 5</option>
        <option value="4">Season 4</option>
        <option value="3">Season 3</option>
        <option value="2">Season 2</option>
        <option value="1">Season 1</option>
        <option value="all">ALL SEASONS</option>
      </select> -->

      <!--
        RULES:
        1. Start with the most recent season
        2. List episodes in that season chronoligically (starting with episode 1)
        FOR EACH EPISODE, list available stream options
          1. Start with preferred subscription options
          2. Then preferred free options
          3. Then preferred Pay Per View options (w/ price)
          4. Then non-preferred free options
          5. Then non-preferred subscription options (w/ subscription note)
          6. And finally non-preferred Pay Per View options (w/ price)
          7. If the country doesn't match, ONLY show that option if it's preferred
      -->

      <ol class="episode-list">
        <li v-for="episode in ui.episodeData">
          <figure>
            <img :src="episode.thumbnail_url" :title="`Episode ${episode.season_number}x${episode.episode_number}: ${episode.name}`" />
          </figure>
          <div class="text-wrapper">
            <div class="title-wrapper">
              <span class="episode-number">{{ `${episode.season_number}x${episode.episode_number}` }}</span>
              <span class="episode-title">{{episode.name}}</span>
            </div>

            <time :datetime="episode.release_date">{{episode.release_date}}</time>
            <div class="overview">
              <p>
                {{episode.overview}}
              </p>
            </div>
          </div>
          <div class="episode-links">
            <a href="#" v-for="source in episode.sources.slice(0, 6)" :key="source.source_id">
              <span>Watch on {{source.name}}</span>
              <span>→</span>
            </a>
          </div>
        </li>
      </ol>
    </section>
  </main>
</template>

<style lang="scss" scoped src="./Show.scss"></style>
