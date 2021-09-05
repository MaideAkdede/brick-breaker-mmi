const controller = {
    keys: [
        'ArrowLeft',
        'ArrowRight'
    ],
    activeKeys: [],
    init() {
        document.addEventListener('keydown', (e) => {
            if (this.keys.includes(e.key) && !this.activeKeys.includes(e.key)) {
                console.log(e)
                console.log(this.activeKeys)
                e.preventDefault();
                this.activeKeys.push(e.key);
            }
        })
        document.addEventListener('keyup', (e) => {
            if (this.activeKeys.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation();
                const i = this.activeKeys.indexOf(e.key);
                this.activeKeys.splice(i, 1);
            }
        })
    }
}
export default controller;