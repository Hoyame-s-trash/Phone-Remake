class Utils{
    activeScroll (ref, option = {margin:0}) {
        const elem = ref.querySelector('.active');
        ref.scrollTop = elem.offsetTop - ref.offsetTop - option.margin
    }
}

const utilsInstance = new Utils()
export default utilsInstance