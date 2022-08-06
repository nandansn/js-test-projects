


for (let index = 0; index < 1; index++) {

    let folderName = document.querySelector(
      'tr[data-row-type="folder-object-row"] td:nth-child(2) a span'
    ).title;
    document.querySelector(
      'tr[data-row-type="folder-object-row"] td button.oui-table__action-menu__target'
    ).click();
    document.querySelector('[data-test-id="deleteFolderAction"]').click();
    document.querySelector("[name='deleteConfirm']").focus()
    document.querySelector("[name='deleteConfirm']").value = new String(folderName).replace("/","")
    document
      .querySelector(
        "div.oui-form-dialog__footer-controls button.oui-button.oui-button-danger"
      )
      .click();

}

