import Dockerode from "dockerode";

export async function POST(request, {params}){
    const docker = new Dockerode

    docker.createContainer({
        Image : params.NameImag,
        AttachStdin: false,
        AttachStdout: true,
        AttachStderr: true,
        Tty: true,
      })
      .then(function (container) {
        return container.start();
      });
    return Response.json(`start containers complete`);
}