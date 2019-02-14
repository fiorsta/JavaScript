class Review{
    constructor(id, author, text, isApproved=false, container = '#reviews'){
        this.id = id;
        this.author = author;
        this.text = text;
        this.isApproved = isApproved;
        this.container = container;
        this._render();
    }
    _render(){
        let $item = $('<div/>', {
            class: 'review-item',
            'data-id': this.id,
            'data-author': this.author
        });
        $item.append($(`<span class="review-author">${this.author}</span>`));
        $item.append($(`<p class="review-text">${this.text}</p>`));
        if (this.isApproved === false) {
            $item.append($('<button/>', {
                class: 'approve-btn',
                text: 'V',
                'data-id': this.id
            }));
            $item.append($('<button/>', {
                class: 'notApprove-btn',
                text: 'X',
                'data-id': this.id
            }));
        }

        $(this.container).append($item);
    }
}