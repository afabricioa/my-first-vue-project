
<script setup>
    defineProps({
        show: Boolean
    })
</script>


<template>
    <Transition
        enter-from-class="opacity-0 scale-125"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        enter-leaver-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
    >
        <div v-if="show" class="modal-mask">
            <div class="container">
                <div>
                    <slot></slot>
                </div>
                <footer class="footer">
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
    .modal-mask{
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.6);
        display: grid;
        place-items: center;
    }

    .container{
        border-radius: 10px;
        background-color: white;
        padding: 1rem;
        width: 80vw;
        max-width: 500px;
    }

    .footer{
        border-top: 1px solid #ddd;
        margin-top: 1rem;
        padding-top: 0.5rem;
        font-size: .8rem;
    }

    .footer button {
        background: #ddd;
        padding: .25rem .75rem;
        border-radius: 15px;
    }

    .footer button:hover{
        background: #c8c8c8;
    }
</style>