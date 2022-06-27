const data = [{
  "type": "skill",
  "name": "javascript"
}, {
  "type": "skill",
  "name": "php"
}, {
  "type": "skill",
  "name": "c"
}, {
  "type": "skill",
  "name": "go"
}, {
  "type": "skill",
  "name": "python"
}]


export default function skill(req, res) {

  res.status(200).json(data)
}

