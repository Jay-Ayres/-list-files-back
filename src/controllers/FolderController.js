import files from "list-files-pkg";

class FolderController {
  async getByPath(req, res) {
    try {
      const myFiles = files.getOrderedlist(req.body.path);
      return res.status(200).json(myFiles);
    } catch (error) {
      return res.status(400).json({ error: "Invalid request" });
    }
  }
}

export default new FolderController();
