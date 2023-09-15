<template>
    <section class="common-board-wrap div-main-text">
        <div class="common-board-container">
            <h1 class="spt-page-title">고객 문의</h1>
            <div id="divDataRoomDetail">
                <p class="text-write-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/></svg>
                    <span>게시물 작성</span>
                </p>
                <div class="div-write-titleline">
                    <input type="text" placeholder="작성자명을 입력해주세요." maxlength="25">
                </div>
                <div class="div-write-titleline">
                    <input data-title-input type="text" placeholder="제목을 입력하세요..." ref="titleEl" v-model="title" maxlength="25">
                </div>
                <div id="editorWr">
                    <QuillEditor ref="qe" :options="editorOption" theme="snow" content-type="html"/>
                </div>
                <div id="divUploadedFiles">

                    <div @dragenter="dragEnter" @dragover="dragOver" @dragleave="dragLeave" @drop="fileDragIn" class="section-upload-drag" ref="uploadSection">
                        <div class="dotline-inner-drag">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"/></svg>
                            <p class="title-sub-strong">Drag file here</p>
                            <p>or</p>
                            <label for ="buttonUploadOrigin" id="btnUpload" class="button-dark" ref="btnUpload">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z" fill="rgba(255,255,255,1)"/></svg>
                                <span>Browse</span>
                            </label>
                            <input type="file" @change="inputFileUp" name="button-upload" id="buttonUploadOrigin" ref="inputFile" multiple>
                        </div>
                    </div>

                    <div class="section-upload-list">
                        <p>Uploaded file list</p>
                        <ul data-uploaded-list>
                            <li v-if="tempUploaded.length == 0">업로드된 파일이 없습니다</li>
                            <li v-for="(item, index) in tempUploaded" ata-uploaded-file>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"/></svg>
                                <p data-uploaded-title>
                                    <label>{{ item.uploadedName }}</label>
                                    <span data-uploaded-size>{{ item.uploadedSize }}</span>
                                </p>
                                <svg @click="delThis(index)" class="button-trash-basket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"/></svg>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>
            <div class="common-button-container"><!-- 목록 하단 버튼라인 -->
                <button @click="goBack">
                    <p>목 록</p>
                </button>
                
                    <button @click="saveSupport">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(255,255,255,1)"/></svg>
                        <p>작성완료</p>
                    </button>
                
            </div>

        </div>
        
    </section>
</template>


<script> // quill 에디터
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'

    export default {
        components: {
            QuillEditor
        },
        data() {
            return {
                editorOption: {
                    placeholder: "내용을 입력하세요",
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
    }

</script>

<script setup>   
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    import { toast } from 'vue3-toastify'

    const router = useRouter()

    const uploadSection = ref()
    const btnUpload = ref()
    const tempUploaded = ref([])

    const inputFile = ref()

    const titleEl = ref()
    let title = ''
    const content = ref()

    const qe = ref()

    /* 드래그 to 파일 업로드 */

    /* 박스 안에 Drag 들어왔을 때 */
    function dragEnter(e) {
        // console.log('dragenter');
        // console.log(e)
    }

    /* 박스 안에 Drag를 하고 있을 때 */
    function dragOver(e) {
        e.preventDefault();
        // console.log('dragover');
        // console.log(e)

        // e.style.backgroundColor = 'rgba(var(--clr-inter-shade), .15)';
        e.currentTarget.classList.add('drag-color')
        console.log(e.currentTarget)
    }

    /* 박스 밖으로 Drag가 나갈 때 */
    function dragLeave(e) {
        // console.log('dragleave');

        // e.style.backgroundColor = 'rgba(var(--clr-inter-shade), .05)';
        e.currentTarget.classList.remove('drag-color')
    }            

    /* 박스 안에서 Drag를 Drop했을 때 */
    function fileDragIn(e) {
        e.preventDefault();

        var data = e.dataTransfer.files;
        console.dir(data);        

        for (let i=0; i < data.length; i++) {
            tempUploaded.value.push({"uploadedName": data[i].name, "uploadedSize": data[i].size + "kb"})
        }

        console.log(tempUploaded)
    }        

    //input type=file을 이용한 업로드
    function inputFileUp(e) {        
        let data = e.currentTarget.files

        console.log(data)

        for (let i=0; i < data.length; i++) {
            console.log(data[i])
            tempUploaded.value.push({"uploadedName": data[i].name, "uploadedSize": data[i].size + "kb", "file": data[i]})
        }
    }

    function goBack() {
        router.go(-1);
    }

    function delThis(e) {
        tempUploaded.value.splice(e, 1)

    }

    function wrComp() {
        //작성된 내용
        let getTexts = qe.value.getContents()
        
        return getTexts;
    }
    

    // 게시물 등록
    function saveSupport() {
        console.log(tempUploaded.value)

        if(!!title.trim() === false) {
            toast.warning('제목을 입력해주세요.')
            titleEl.value.focus()
            return
        }

        let jtext = wrComp(); // 작업내용

        if(jtext.length < 20) {
            toast.warning('작성 내용은 10글자 이상 써주세요.')
            return
        }
        let data = {}
        data['title'] = title
        data['jtext'] = jtext


        let formData = new FormData();
        formData.append('data',JSON.stringify(data))
            formData.append('file', inputFile.value.value)
        console.log(inputFile.value.value)
        console.log(formData.get('file'))
    }

</script>

<style lang="scss" scoped>
    #divUploadedFiles {
        
    }

    .common-button-container {
        button {
            padding: .5rem 1rem;
        }
    }


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
        @apply flex items-center mb-2;

        padding: .5rem 0 1.5rem;
        color: rgba(var(--clr-inter-shade), 1);

        > svg {
            @apply w-3.5 mr-2;
        }

        > span {
            @apply font-semibold inline-block;

            font-size: var(--fnt-title-md);
            font-family: 'NS-Neo';
        }
    }

    .div-titleline-write {
        @apply flex items-center;

        > p {
            @apply text-center;

            font-size: var(--fnt-lg);
            color: rgba(var(--clr-inter-shade), 1);
        }
    }

    [data-title-input] {
        @apply w-full;

    }

    #editorWr {
        @apply mt-2;

        background-color: rgba(var(--white), 1);
    }

    .section-upload-list {
        > p {
            font-size: var(--fnt-title-sm);
        }
    }


</style>
