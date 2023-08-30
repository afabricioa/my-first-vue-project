import { ref, watch } from "vue";


export function useStorage(key){
    let storedValue = localStorage.getItem(key);
    console.log(key)
    let val = ref(storedValue);

    watch(val, () => {
      write(key, val);
    });

    function write(key, val){
        localStorage.setItem(key, val.value)
    }
    
    return val;
}