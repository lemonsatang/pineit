<template>
    <SubPageHero />

    <section class="container div-main-text">

        <div id="divSearchLine">
            <select data-totalsearch-select>
                <option value="cd-total">전체</option>
                <option value="cd-title">제목</option>
                <option value="cd-day">날짜</option>
            </select>

            <div class="line-vr"></div>
            <input data-totalsearch-input type="text">
            <button data-search-button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </button>

        </div>
        <div id="divDataRoomDetail">
            <p class="text-write-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/></svg>
                <span>게시물 작성</span>
            </p>
            <div id="divTitleWrite">
                <p>제 목</p>
                <input data-title-input type="text" placeholder="제목을 입력하세요...">
            </div>
            <div id="editorWr">
                <QuillEditor :options="editorOption" theme="snow"/>
            </div>

            <div id="divUploadedFiles">

                <div class="section-upload-drag" ref="uploadSection">
                    <div class="dotline-inner-drag">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"/></svg>
                        <p class="title-sub-strong">Drag file here</p>
                        <p>or</p>
                        <label for ="buttonUploadOrigin" id="btnUpload" class="button-dark" ref="btnUpload">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" fill="rgba(255,255,255,1)"/></svg>
                            <span>Browse</span>
                        </label>
                        <input type="file" name="button-upload" id="buttonUploadOrigin" ref="inputFile" multiple>
                    </div>
                </div>

                <div class="section-upload-list">
                    <p>Uploaded file list</p>
                    <ul data-uploaded-list>
                        <li data-uploaded-file>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"/></svg>
                            <p data-uploaded-title><label ref="uploadedName">파일예시.xls</label><span data-uploaded-size ref="uploadedSize">324kb</span></p>
                            <svg class="button-trash-basket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"/></svg>
                        </li>

                    </ul>
                </div>

            </div>

        </div>
        <div class="detail-btm-buttons"><!-- 목록 하단 버튼라인 -->
            <router-link to="/csnotice/자료실">
                <button class="button-white">
                    <p>목 록</p>
                </button>
            </router-link>
            <router-link to="/csnotice/자료실">
                <button class="button-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(255,255,255,1)"/></svg>
                    <p>작성완료</p>
                </button>
            </router-link>
        </div>
    </section>

</template>

<script setup>
    import SubPageHero from '@/components/SubPageHero.vue'

</script>

<script>
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'

    export default {
        components: {
            QuillEditor
        },
        data() {
            return {
                editorOption: {
                    placeholder: "place holder test",
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
                            ["blockquote", "code-block"], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
                            [{ header: 1 }, { header: 2 }], // <h1>, <h2>
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ script: "sub" }, { script: "super" }], // <sub>, <sup>
                            [{ indent: "-1" }, { indent: "+1" }], // class제어
                            [{ direction: "rtl" }], //class 제어
                            [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
                            [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
                            [{ font: [] }], // 글꼴 class로 제어
                            [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
                            [{ align: [] }], // class
                            // ["clean"],
                            ["link", "image", "video"],
                        ],
                        syntax: {
                            highlight: (text) => hljs.highlightAuto(text).value,
                        },
                    },
                },
                content: "",
            }
        },
        mounted() {
            /* 드래그 to 파일 업로드 */

            const btnUpload = this.$refs.btnUpload;
            const inputFile = this.$refs.inputFile;
            const uploadBox = this.$refs.uploadSection;
            const uploadedName = this.$refs.uploadedName;
            const uploadedSize = this.$refs.uploadedSize;


            /* 박스 안에 Drag 들어왔을 때 */
            uploadBox.addEventListener('dragenter', function(e) {
                console.log('dragenter');
            });

            /* 박스 안에 Drag를 하고 있을 때 */
            uploadBox.addEventListener('dragover', function(e) {
                e.preventDefault();
                console.log('dragover');

                this.style.backgroundColor = 'rgba(var(--clr-inter-shade), .15)';
            });

            /* 박스 밖으로 Drag가 나갈 때 */
            uploadBox.addEventListener('dragleave', function(e) {
                console.log('dragleave');

                this.style.backgroundColor = 'rgba(var(--clr-inter-shade), .05)';
            });

            /* 박스 안에서 Drag를 Drop했을 때 */
            uploadBox.addEventListener('drop', function(e) {
                e.preventDefault();

                console.log('drop');

                var data = e.dataTransfer.files[0];
                console.dir(data);

                uploadedName.innerHTML = data.name;
                uploadedSize.innerHTML = data.size + "kb";
            });
        }
    }
</script>


<style lang="scss" scoped>
    #divDataRoomDetail {
        @apply w-full border-black border-t-2;
    }

/* 제목영역 */

    #divDetailTitle {
        @apply mt-4 pb-3 border-b border-black;

        color: rgba(var(--clr-inter-shade), 1);
    }

/* 본문 */

    #divDetailText {
        @apply pt-4 pb-8;

        > img {
            @apply mb-2 mx-auto w-full;
        }

        > p {
            font-size: var(--fnt-md);
            color: rgba(var(--clr-inter-shade), 1);
        }
    }

    .text-write-top {
        @apply flex items-center py-2 mb-2;

        color: rgba(var(--clr-inter-shade), 1);

        > svg {
            @apply w-3.5 mr-2;
        }

        > span {
            @apply font-semibold inline-block;

            font-size: var(--fnt-lg);
            font-family: 'NS-Neo';
        }
    }

    #divTitleWrite {
        @apply grid items-center;

        grid-template-columns: 5rem 1fr;

        > p {
            @apply text-center;

            font-size: var(--fnt-lg);
            color: rgba(var(--clr-inter-shade), 1);
        }
    }

    [data-title-input] {
        @apply ml-2;


    }

    #editorWr {
        @apply mt-2;
    }

/* 파일 업로드 영역 */

    #divUploadedFiles {
        @apply grid;

        grid-template-columns: 9rem 1fr;
    }

    .section-upload-drag {
        @apply mr-4 rounded flex flex-col gap-1 justify-center items-center p-2 h-fit;

        background: rgba(var(--clr-inter-shade), .05);
    }

    [data-uploaded-file] {
        @apply border-b items-center;

        border-bottom: 1px solid rgba(var(--clr-inter-shade), .15);
    }

    .button-trash-basket {
        @apply ml-auto;
    }

    #buttonUploadOrigin {
        @apply hidden;
    }

    .title-sub-strong {
        @apply font-black mt-2;

        color: rgba(var(--clr-inter-shade), 1);
        font-family: 'NS-Neo';
    }

    .button-dark {
        @apply ml-0 cursor-pointer;

    }

    .dotline-inner-drag {
        @apply border-dashed border w-full flex flex-col items-center py-4 gap-0;

        border: 2px dashed rgba(var(--clr-inter-shade), .2);

        > svg {
            @apply my-1;
        }

        > .button-dark {
            @apply px-1.5 py-1.5 mt-1;

            filter: drop-shadow(0 0 8px rgba(var(--clr-inter-shade), .45));
        }
    }
</style>
