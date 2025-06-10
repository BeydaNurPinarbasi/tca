import { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useDropzone } from "react-dropzone";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToParentElement } from "@dnd-kit/modifiers";

function SortableImage({
  src,
  index,
  id,
  onRemove,
  onClick,
}: {
  src: string;
  index: number;
  id: string;
  onRemove: () => void;
  onClick: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="relative w-32 h-32 overflow-hidden rounded-lg border shadow-sm cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt={`image-${index}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute top-1 right-1 bg-white/80 text-red-600 rounded-full p-1 text-xs hover:bg-red-500 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

export default function PhotosTab() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [pendingApproval, setPendingApproval] = useState(false);

  const removeImage = (index: number) => {
    setImages((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem("profilePhotos", JSON.stringify(updated));
      return updated;
    });
    setToastMessage("Fotoğraf silindi");
    setShowToast(true);
    setPendingApproval(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    const stored = localStorage.getItem("profilePhotos");
    if (stored) setImages(JSON.parse(stored));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (files) => {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setImages((prev) => {
            const updated = [...prev, result];
            localStorage.setItem("profilePhotos", JSON.stringify(updated));
            return updated;
          });
          setPendingApproval(true);
        };
        reader.readAsDataURL(file);
      });
    },
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = images.findIndex((_, i) => i.toString() === active.id);
    const newIndex = images.findIndex((_, i) => i.toString() === over.id);
    setImages((items) => {
      const reordered = arrayMove(items, oldIndex, newIndex);
      localStorage.setItem("profilePhotos", JSON.stringify(reordered));
      return reordered;
    });
    setPendingApproval(true);
  };

  const handleSubmitApproval = () => {
    alert("Fotoğraflar onaya gönderildi.");
    setPendingApproval(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Model Fotoğrafları</h3>
        {pendingApproval && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg space-y-4">
            <p className="text-sm text-yellow-800">
              Gerçekleştirdiğiniz değişiklikler için{" "}
              <strong>“Onaya Gönder”</strong> butonuna basmanız gerekmektedir.
              Yaptığınız değişiklikler tarafımıza onaya düşecektir. Editörlerimiz
              tarafından incelendikten sonra onay verilip yayına alınacaktır.
            </p>
            <button
              onClick={handleSubmitApproval}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-700 transition"
            >
              Onaya Gönder
            </button>
          </div>
        )}
      </div>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-neutral-300 p-6 rounded-xl text-center cursor-pointer hover:border-black transition"
      >
        <input {...getInputProps()} />
        <p className="text-sm text-neutral-600">
          Fotoğrafları buraya sürükle veya tıkla yükle
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={images.map((_, i) => i.toString())}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <SortableImage
                key={index}
                id={index.toString()}
                index={index}
                src={src}
                onRemove={() => removeImage(index)}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        as={Fragment}
      >
        <div className="fixed inset-0 z-40 bg-black/70 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh]">
            <img
              src={selectedImage ?? ""}
              alt="Büyütülmüş Görsel"
              className="w-full object-contain max-h-[90vh]"
            />
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
