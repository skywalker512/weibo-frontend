export default function() {
    const mainEle = document.createElement('div');
    mainEle.classList.add('post');

    mainEle.insertAdjacentHTML('beforeend', `
        <div class="outer"></div>
        <div class="inner">
            <div class="container">
                <div class="close"><a href="/done"><span class="icon icon-index-close"></span></a></div>
                <div class="title">有什么新鲜事想告诉大家?</div>
                <div class="box">
                    <div class="count">已输入<span id="count"></span>字</div>
                    <div class="input">
                        <textarea></textarea>
                    </div>
                    <div class="controller">
                        <div class="function">                    
                            <span class="icon icon-article-emoji"></span>
                            <span class="icon icon-article-pic"></span>
                            <span class="icon icon-article-video"></span>
                            <span class="icon icon-aticle-topic"></span>
                        </div>
                        <div class="push">
                            <a href="/done">
                                <button type="submit">发布</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    `)
    return mainEle;
}