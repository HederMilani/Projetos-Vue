<template>
    <div class="title flex-centered">
            <div class="title-icon">
              <i class="icon icon-time"></i>
            </div>
            <div class="title-content">
              {{  t.description  }}
            </div>
            <div class="title-action">
              <button @click="$init('toggle', toDo)" class="btn btn-link">Concluido</button>
              <button class="btn btn-link">
                <span class="text-error">Remover</span>
              </button>
            </div>
          </div>
</template>

<script>
    export default {
        props : {
            toDo: {
                type: Object,
                required : true
            }
        }
    }
</script>