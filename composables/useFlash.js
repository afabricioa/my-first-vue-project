import swal from "sweetalert";

export function useFlash(){
    function flash(label, message, type){
        return swal(label, message, type);
    }

    return flash;
}