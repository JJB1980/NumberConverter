


class UrlMappings {
 static mappings = {
  "/$controller/$id?"{
    action = [GET:"show", POST:"save", PUT:"update", DELETE:"remove"]
  }
  "500"(view:'/error')
 }
}




/*
class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
*/