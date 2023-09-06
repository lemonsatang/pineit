<template>
    <dialog data-modal-window open>
        <div data-modal-innards>
            <header data-modal-header>
                <h2 data-modal-title>제목</h2>
            </header>

            <div data-modal-content>
                <slot name="modal-content"></slot>
            </div>

            <div data-modal-footer>
                <slot name="modal-controls"></slot>
            </div>
        </div>
    </dialog>
</template> <!-- Template Ends -->

<script setup>

</script> <!-- Logic Ends -->

<style lang="scss">
    [data-modal-window] {
        @apply fixed inset-0 m-auto shadow-lg;

        width: min(21rem, 100% - .4rem);
        height: min(32rem, 100% - 2rem);
        background-color: transparent;
    }

    [data-modal-innards] {
        @apply flex flex-col w-full h-full rounded-sm;

        background-color: rgb(var(--clr-inter-pane));
        border: 1px solid rgba(var(--clr-inter-shade), .1);
        border-radius: .15rem;
    }

    [data-modal-header] {
        @apply flex justify-center items-center px-3;

        flex: 0 0 3rem;
        border-block-end: 1px solid rgba(var(--clr-inter-shade), .1);
    }

    [data-modal-title] {
        font-size: var(--fnt-md);
        font-weight: 900;
    }

    [data-modal-content] {
        flex: 1 1 auto;
    }

    [data-modal-footer] {
        @apply flex justify-end items-center gap-1 mt-auto px-3;

        flex: 0 0 3rem;
        border-block-start: 1px solid rgba(var(--clr-inter-shade), .1);
    }
</style> <!-- Stylesheet Ends -->