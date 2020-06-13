class FolderController {
  async index(req, res) {
    //const events = await Event.findAll(); call the lib here
    let folders = [
      { name: "folder1", size: "1gb", updatedDate: "2020/06/01" },
      { name: "folder2", size: "1gb", updatedDate: "2020/06/01" },
      { name: "folder3", size: "1gb", updatedDate: "2020/06/01" }
    ];
    return res.status(200).json(folders);
  }
}

export default new FolderController();
