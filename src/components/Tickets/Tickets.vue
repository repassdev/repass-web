<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <v-list two-line>
          <template v-for="ticket in tickets">
            <v-list-tile
              :key="ticket.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title> {{ ticket.title }} </v-list-tile-title>
                <v-list-tile-sub-title> {{ ticket.date }} - {{ ticket.time }} </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tickets: [
          {
            id: 1,
            title: 'Show Foda',
            date: '27/10/2018',
            time: '20:00'
          },
          {
            id: 2,
            title: 'Rodeio',
            date: '03/11/2018',
            time: '18:00'
          },
          {
            id: 3,
            title: 'Teatro Standup Comedy',
            date: '15/11/2018',
            time: '21:00'
          }
        ]
      }
    }
  }
</script>
