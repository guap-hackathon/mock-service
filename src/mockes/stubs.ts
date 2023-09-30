type FaceStatus = 'real' | 'fake' | 'no_face'

export const REAL_FACE_RESPONSE: Record<string, FaceStatus> = {
  faceStatus: 'real'
}

export const FAKE_FACE_RESPONSE: Record<string, FaceStatus> = {
  faceStatus: 'fake'
}

export const NO_FACE_RESPONSE: Record<string, FaceStatus> = {
  faceStatus: 'no_face'
}
