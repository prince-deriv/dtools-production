const page_git_file_merger = `
<div class="app-section" id="git-file-merger">
    ${page_back_button}
    <h4>Git File Merger</h4>

    <div>
        <div class="form-group">
            <label for="">PR #</label>
            <input type="text" class="form-control fm" id="fm-pr-id" placeholder="" value="" />
        </div>

        <div class="form-group">
            <label for="">Files (comma separated)</label>

            <div id="merger-files-box">
                <input type="text" class="form-control fm" id="fm-file-names" placeholder="Filename" value="" />
            </div>
        </div>
        
        <label for="link">Copy File(Git Code)</label>
        <div class="code-box">
            <textarea class="form-control code big" id="git-file-merger-code" readonly></textarea>
        </div>
    </div>
</div>
`;
