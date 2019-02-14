class Feedback {
    constructor(source, container = '#reviews') {
        this.source = source;
        this.container = container;
        this.countReviews = 0; // Общее кол-во отзывов
        this.reviewItems = []; // Массив одобренных отзывов
        this._init();
    }
    _init() {
        $(this.container).text('Отзывы');
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let review of data) {
                    this.reviewItems.push(review);
                    this._renderReview(review);
                }
                this.countReviews = data.countReviews;
            })
        console.log(this.reviewItems);
    };
    _renderReview(review) {
        let $container = $('<div/>', {
            class: 'review-item',
            'data-id': review.id,
            'data-author': review.author
        });
        $container.append($(`<span class="review-author">${review.author}</span>`));
        $container.append($(`<p class="review-text">${review.text}</p>`));
        if (review.isApproved){
            $container.addClass('approved');
        }
        else{
            $container.addClass('notApproved');
        }

        $container.appendTo(this.container);
    }
    approveReview(element){
        let elementId = $(element).data('id');
        let findReviewItem = $('.review-item[data-id='+elementId+']');
        
        //создать новый объект-отзыв
        let newReview={
            id: elementId,
            author: findReviewItem.data('author'),
            text: findReviewItem.find('.review-text').text(),
            isApproved: true
        };
        
        //добавить в массив одобренных отзывов, если такой пользователь еще не оставлял отзыв
        let newReviewAuthor = newReview.author;
        let find = this.reviewItems.find(review => review.author === newReviewAuthor);
        if (find) {
            console.log("Вы уже оставили отзыв!");
            findReviewItem.addClass('notApproved');
        } else {
            this.reviewItems.push(newReview);
            findReviewItem.addClass('approved');
        }
        
        console.log(this.reviewItems);
        
        //убрать кнопки-модераторы
        element.remove();
        findReviewItem.find('.notApprove-btn').remove();
    }
    banReview(element){
        let elementId = $(element).data('id');
        let findReviewItem = $('.review-item[data-id='+elementId+']');

        findReviewItem.addClass('notApproved');
        
        console.log(this.reviewItems);
        
         //убрать кнопки-модераторы
        element.remove();
        findReviewItem.find('.approve-btn').remove();
    }
}
