import { ref, onMounted } from 'vue'

// shared data across instances so we load only once.
const data = ref()

export function useSponsor() {
  onMounted(() => {
    if (data.value) {
      return
    }

    data.value = mapSponsors()
  })

  return {
    data
  }
}

function mapSponsors() {
  return [
    {
      tier: 'Platinum Sponsor',
      size: 'big',
      items: [
        {
          "name": "Newlogic Digital",
          "url": "https://www.newlogic.cz/",
          "img": "/sponsors/newlogic.svg"
        }
      ]
    }
  ]
}
